<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed.']);
  exit;
}

$configPath = __DIR__ . '/contact-config.php';
if (!is_file($configPath)) {
  http_response_code(500);
  echo json_encode([
    'error' => 'Email is not configured. Please add contact-config.php on the server.',
  ]);
  exit;
}

/** @var array $config */
$config = require $configPath;
require_once __DIR__ . '/smtp-mailer.php';

function escape_html(string $value): string
{
  return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function json_error(string $message, int $status = 400): void
{
  http_response_code($status);
  echo json_encode(['error' => $message]);
  exit;
}

try {
  $raw = file_get_contents('php://input');
  $body = json_decode($raw ?: '', true);
  if (!is_array($body)) {
    json_error('Invalid request body.');
  }

  $fullName = trim((string) ($body['fullName'] ?? ''));
  $email = trim((string) ($body['email'] ?? ''));
  $phone = trim((string) ($body['phone'] ?? ''));
  $subject = trim((string) ($body['subject'] ?? ''));
  $message = trim((string) ($body['message'] ?? ''));

  if ($fullName === '' || $email === '' || $phone === '' || $subject === '' || $message === '') {
    json_error('All fields are required.');
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_error('Please enter a valid email address.');
  }

  if (!preg_match('/^\d{10,15}$/', $phone)) {
    json_error('Please enter a valid phone number.');
  }

  $smtpUser = trim((string) ($config['smtp_user'] ?? ''));
  $smtpPass = trim((string) ($config['smtp_pass'] ?? ''));
  $smtpHost = trim((string) ($config['smtp_host'] ?? 'smtp.gmail.com'));
  $smtpPort = (int) ($config['smtp_port'] ?? 587);
  $toEmail = trim((string) ($config['to_email'] ?? $smtpUser));
  $ccEmail = trim((string) ($config['cc_email'] ?? ''));
  $siteUrl = rtrim((string) ($config['site_url'] ?? 'https://golfswipe.com'), '/');

  if ($smtpUser === '' || $smtpPass === '') {
    json_error('Email is not configured. Please add SMTP credentials to contact-config.php.', 500);
  }

  $logoPath = dirname(__DIR__) . '/asset/img/white-golf-swipe-logo.png';
  $logoCid = 'golfswipe-logo';
  if (!is_file($logoPath)) {
    json_error('Email logo asset is missing on the server.', 500);
  }

  $safeName = escape_html($fullName);
  $safeEmail = escape_html($email);
  $safePhone = escape_html($phone);
  $safeSubject = escape_html($subject);
  $safeMessage = nl2br(escape_html($message));
  $replyMailto = 'mailto:' . $safeEmail . '?subject=' . rawurlencode('Re: ' . $subject);
  $year = date('Y');

  $detailRow = static function (string $label, string $valueHtml, bool $isLast = false): string {
    $pad = $isLast ? '4px' : '18px';
    $border = $isLast ? '' : 'border-bottom: 1px solid #e6efe9;';
    return <<<HTML
      <tr>
        <td style="padding: 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 18px 8px {$pad}; {$border}">
                <p style="margin: 0 0 6px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase; color: #8cc129;">
                  {$label}
                </p>
                <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; font-weight: 600; color: #03372b; word-break: break-word;">
                  {$valueHtml}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    HTML;
  };

  $rowsHtml =
    $detailRow('Full name', $safeName) .
    $detailRow(
      'Email',
      '<a href="mailto:' . $safeEmail . '" style="color: #03372b; text-decoration: none; border-bottom: 1px solid #8cc129;">' . $safeEmail . '</a>',
    ) .
    $detailRow(
      'Phone',
      '<a href="tel:' . $safePhone . '" style="color: #03372b; text-decoration: none;">' . $safePhone . '</a>',
    ) .
    $detailRow('Subject', $safeSubject, true);

  $adminText = implode("\n", [
    'New GolfSwipe contact form submission',
    '',
    "Full name: {$fullName}",
    "Email: {$email}",
    "Phone: {$phone}",
    "Subject: {$subject}",
    '',
    'Message:',
    $message,
  ]);

  $adminHtml = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GolfSwipe Contact</title>
</head>
<body style="margin: 0; padding: 0; background-color: #edf3ef; width: 100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #edf3ef; width: 100%;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 560px; max-width: 560px; background-color: #ffffff; border-radius: 20px; overflow: hidden;">
          <tr>
            <td align="center" style="background-color: #03372b; padding: 32px 32px 30px;">
              <img src="cid:{$logoCid}" alt="GolfSwipe" width="150" style="margin: 0 auto 18px; width: 150px; max-width: 65%; height: auto; display: block;" />
              <p style="margin: 0 0 14px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase; color: #8cc129;">New inquiry</p>
              <h1 style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 26px; line-height: 1.35; font-weight: 700; color: #ffffff;">New contact form submission</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 28px 36px 12px; background-color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                {$rowsHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 12px 36px 32px; background-color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #f4faf6; border: 1px solid #dceae2; border-radius: 14px;">
                <tr>
                  <td align="center" style="padding: 22px 24px;">
                    <p style="margin: 0 0 10px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase; color: #8cc129;">Message</p>
                    <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.7; color: #03372b; text-align: center; word-break: break-word;">{$safeMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 0 36px 8px; background-color: #ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                <tr>
                  <td align="center" bgcolor="#03372b" style="border-radius: 10px; background-color: #03372b;">
                    <a href="{$replyMailto}" style="display: inline-block; padding: 14px 28px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 10px;">
                      Reply to {$safeName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 28px 36px 32px; background-color: #ffffff;">
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.6; color: #6b857a; text-align: center;">
                Sent automatically from the GolfSwipe contact form.<br>You can reply directly to this email.
              </p>
            </td>
          </tr>
        </table>
        <p style="margin: 18px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #7a9388;">&copy; {$year} GolfSwipe. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

  $replyText = implode("\n", [
    "Hi {$fullName},",
    '',
    "Thank you for contacting GolfSwipe. We've received your message and will get back to you within one business day.",
    '',
    "Your subject: {$subject}",
    '',
    'GolfSwipe is the world\'s first all-in-one app built exclusively for the modern golfer. Whether you are hunting for rare JDM clubs, looking for a game while traveling, mapping out your next weekend round, or settling a rules debate with your friends, GolfSwipe connects you to a global community of players instantly and securely.',
    '',
    "Explore GolfSwipe: {$siteUrl}",
    '',
    '— The GolfSwipe Team',
  ]);

  $replyHtml = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for contacting GolfSwipe</title>
</head>
<body style="margin: 0; padding: 0; background-color: #edf3ef; width: 100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #edf3ef; width: 100%;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 560px; max-width: 560px; background-color: #ffffff; border-radius: 20px; overflow: hidden;">
          <tr>
            <td align="center" style="background-color: #03372b; padding: 32px 32px 30px;">
              <a href="{$siteUrl}" style="text-decoration: none;">
                <img src="cid:{$logoCid}" alt="GolfSwipe" width="168" style="margin: 0 auto 18px; width: 168px; max-width: 70%; height: auto; display: block;" />
              </a>
              <p style="margin: 0 0 12px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #8cc129;">Message received</p>
              <h1 style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 28px; line-height: 1.35; font-weight: 700; color: #ffffff;">Thank you for reaching out</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 32px 40px 8px; background-color: #ffffff;">
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.6; color: #33584c; text-align: center;">
                Hi {$safeName}, we&rsquo;ve got your message and will get back to you within one business day.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 24px 40px 8px; background-color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #f4faf6; border: 1px solid #dceae2; border-radius: 14px;">
                <tr>
                  <td align="center" style="padding: 18px 20px;">
                    <p style="margin: 0 0 6px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase; color: #8cc129;">Your subject</p>
                    <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; font-weight: 600; color: #03372b;">{$safeSubject}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 28px 40px 8px; background-color: #ffffff;">
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.75; color: #33584c; text-align: center;">
                GolfSwipe is the world&rsquo;s first all-in-one app built exclusively for the modern golfer. Whether you are hunting for rare JDM clubs, looking for a game while traveling, mapping out your next weekend round, or settling a rules debate with your friends, GolfSwipe connects you to a global community of players instantly and securely.
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 28px 40px 34px; background-color: #ffffff;">
              <a href="{$siteUrl}" style="display: inline-block; padding: 14px 28px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 12px; background-color: #03372b;">Explore GolfSwipe</a>
              <p style="margin: 18px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 1.6; color: #03372b; font-weight: 600;">&mdash; The GolfSwipe Team</p>
            </td>
          </tr>
        </table>
        <p style="margin: 18px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #7a9388;">&copy; {$year} GolfSwipe. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;

  $mailer = new SmtpMailer($smtpHost, $smtpPort, $smtpUser, $smtpPass);
  $attachment = [
    [
      'filename' => 'white-golf-swipe-logo.png',
      'path' => $logoPath,
      'cid' => $logoCid,
    ],
  ];

  $mailer->send([
    'from' => $smtpUser,
    'from_name' => 'GolfSwipe Contact',
    'to' => $toEmail,
    'cc' => $ccEmail !== '' ? $ccEmail : [],
    'reply_to' => $email,
    'subject' => "GolfSwipe Contact: {$subject}",
    'text' => $adminText,
    'html' => $adminHtml,
    'attachments' => $attachment,
  ]);

  $mailer->send([
    'from' => $smtpUser,
    'from_name' => 'GolfSwipe',
    'to' => $email,
    'reply_to' => $toEmail,
    'subject' => "Re: {$subject}",
    'text' => $replyText,
    'html' => $replyHtml,
    'attachments' => $attachment,
  ]);

  echo json_encode(['success' => true]);
} catch (Throwable $error) {
  error_log('Contact API error: ' . $error->getMessage());
  http_response_code(500);
  echo json_encode(['error' => 'Failed to send message. Please try again.']);
}
