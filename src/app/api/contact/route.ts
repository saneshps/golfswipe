import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "saneshbigleap@gmail.com";
const CC_EMAIL = process.env.CONTACT_CC_EMAIL ?? "pssanesh09@gmail.com";

type ContactBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP_USER or SMTP_PASS in environment.");
      return NextResponse.json(
        {
          error:
            "Email is not configured. Please add SMTP_USER and SMTP_PASS to .env.local.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactBody;

    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!fullName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!/^\d{10,15}$/.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const text = [
      "New GolfSwipe contact form submission",
      "",
      `Full name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

    const detailRow = (label: string, valueHtml: string, isLast = false) => `
      <tr>
        <td style="padding: 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 18px 8px ${isLast ? "4px" : "18px"}; ${isLast ? "" : "border-bottom: 1px solid #e6efe9;"}">
                <p style="margin: 0 0 6px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase; color: #8cc129;">
                  ${label}
                </p>
                <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 1.5; font-weight: 600; color: #03372b; word-break: break-word;">
                  ${valueHtml}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>GolfSwipe Contact</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    a { color: #8cc129; text-decoration: none; }
    @media only screen and (max-width: 620px) {
      .email-shell { padding: 16px 10px !important; }
      .email-card { width: 100% !important; border-radius: 16px !important; }
      .email-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .email-header { padding: 28px 20px 24px !important; }
      .email-title { font-size: 22px !important; line-height: 1.3 !important; }
      .email-message { padding: 18px 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #edf3ef; width: 100%;">
  <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
    New contact from ${safeName}: ${safeSubject}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #edf3ef; width: 100%;">
    <tr>
      <td align="center" class="email-shell" style="padding: 32px 16px;">
        <table role="presentation" class="email-card" width="560" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 560px; max-width: 560px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 18px 40px rgba(3, 55, 43, 0.12);">
          <tr>
            <td align="center" class="email-header" style="background-color: #03372b; background: linear-gradient(135deg, #03372b 0%, #054e3d 70%, #0a5c47 100%); padding: 36px 32px 32px;">
              <p style="margin: 0 0 14px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase; color: #8cc129;">
                GolfSwipe
              </p>
              <h1 class="email-title" style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 26px; line-height: 1.35; font-weight: 700; color: #ffffff; text-align: center;">
                New contact form submission
              </h1>
              <p style="margin: 14px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.5; color: #c8e0d4; text-align: center;">
                Someone reached out through the GolfSwipe website
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin: 22px auto 0;">
                <tr>
                  <td style="width: 48px; height: 3px; background-color: #8cc129; border-radius: 3px; font-size: 0; line-height: 0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" class="email-pad" style="padding: 28px 36px 12px; background-color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                ${detailRow("Full name", safeName)}
                ${detailRow(
                  "Email",
                  `<a href="mailto:${safeEmail}" style="color: #03372b; text-decoration: none; border-bottom: 1px solid #8cc129;">${safeEmail}</a>`,
                )}
                ${detailRow(
                  "Phone",
                  `<a href="tel:${safePhone}" style="color: #03372b; text-decoration: none;">${safePhone}</a>`,
                )}
                ${detailRow("Subject", safeSubject, true)}
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" class="email-pad" style="padding: 12px 36px 32px; background-color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #f4faf6; border: 1px solid #dceae2; border-radius: 14px;">
                <tr>
                  <td align="center" class="email-message" style="padding: 22px 24px;">
                    <p style="margin: 0 0 10px; font-family: Arial, Helvetica, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase; color: #8cc129;">
                      Message
                    </p>
                    <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.7; color: #03372b; text-align: center; word-break: break-word;">
                      ${safeMessage}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 0 36px 8px; background-color: #ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                <tr>
                  <td align="center" style="border-radius: 10px; background-color: #03372b;">
                    <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: ${subject}`)}" style="display: inline-block; padding: 14px 28px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 10px;">
                      Reply to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" class="email-pad" style="padding: 28px 36px 32px; background-color: #ffffff;">
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.6; color: #6b857a; text-align: center;">
                Sent automatically from the GolfSwipe contact form.<br>
                You can reply directly to this email.
              </p>
            </td>
          </tr>
        </table>
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" class="email-card" style="border-collapse: collapse; width: 560px; max-width: 560px; margin-top: 18px;">
          <tr>
            <td align="center" style="padding: 0 10px;">
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.5; color: #7a9388; text-align: center;">
                &copy; ${new Date().getFullYear()} GolfSwipe. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"GolfSwipe Contact" <${smtpUser}>`,
      to: TO_EMAIL,
      cc: CC_EMAIL,
      replyTo: email,
      subject: `GolfSwipe Contact: ${subject}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
