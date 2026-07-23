<?php

/**
 * Minimal SMTP mailer (STARTTLS + LOGIN) for shared hosting.
 */
class SmtpMailer
{
  private string $host;
  private int $port;
  private string $user;
  private string $pass;

  /** @var resource|null */
  private $socket = null;

  public function __construct(string $host, int $port, string $user, string $pass)
  {
    $this->host = $host;
    $this->port = $port;
    $this->user = $user;
    $this->pass = $pass;
  }

  /**
   * @param array{
   *   from: string,
   *   from_name?: string,
   *   to: string|array,
   *   cc?: string|array,
   *   reply_to?: string,
   *   subject: string,
   *   text: string,
   *   html: string,
   *   attachments?: array<int, array{path: string, filename: string, cid: string}>
   * } $mail
   */
  public function send(array $mail): void
  {
    $this->connect();
    $this->command('EHLO localhost');
    $this->command('STARTTLS', 220);

    $crypto = stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    if ($crypto !== true) {
      throw new RuntimeException('Failed to enable TLS.');
    }

    $this->command('EHLO localhost');
    $this->command('AUTH LOGIN', 334);
    $this->command(base64_encode($this->user), 334);
    $this->command(base64_encode($this->pass), 235);

    $from = $mail['from'];
    $this->command('MAIL FROM:<' . $from . '>');

    foreach ($this->normalizeAddresses($mail['to']) as $to) {
      $this->command('RCPT TO:<' . $to . '>');
    }
    foreach ($this->normalizeAddresses($mail['cc'] ?? []) as $cc) {
      $this->command('RCPT TO:<' . $cc . '>');
    }

    $this->command('DATA', 354);
    $payload = $this->buildMime($mail);
    fwrite($this->socket, $payload . "\r\n.\r\n");
    $this->readResponse(250);
    $this->command('QUIT', 221);
    $this->close();
  }

  private function connect(): void
  {
    $errno = 0;
    $errstr = '';
    $socket = @stream_socket_client(
      'tcp://' . $this->host . ':' . $this->port,
      $errno,
      $errstr,
      30,
      STREAM_CLIENT_CONNECT
    );

    if ($socket === false) {
      throw new RuntimeException("SMTP connect failed: {$errstr} ({$errno})");
    }

    $this->socket = $socket;
    stream_set_timeout($this->socket, 30);
    $this->readResponse(220);
  }

  private function close(): void
  {
    if (is_resource($this->socket)) {
      fclose($this->socket);
    }
    $this->socket = null;
  }

  private function command(string $command, int $expect = 250): void
  {
    fwrite($this->socket, $command . "\r\n");
    $this->readResponse($expect);
  }

  private function readResponse(int $expect): string
  {
    $response = '';
    while (($line = fgets($this->socket, 515)) !== false) {
      $response .= $line;
      if (isset($line[3]) && $line[3] === ' ') {
        break;
      }
    }

    $code = (int) substr($response, 0, 3);
    if ($code !== $expect) {
      throw new RuntimeException("SMTP error (expected {$expect}): " . trim($response));
    }

    return $response;
  }

  /** @param string|array $value */
  private function normalizeAddresses($value): array
  {
    if (is_string($value)) {
      $value = [$value];
    }

    return array_values(array_filter(array_map('trim', $value)));
  }

  private function buildMime(array $mail): string
  {
    $boundaryMixed = 'mixed_' . bin2hex(random_bytes(8));
    $boundaryAlt = 'alt_' . bin2hex(random_bytes(8));
    $fromName = $mail['from_name'] ?? 'GolfSwipe';
    $from = $mail['from'];
    $toList = implode(', ', $this->normalizeAddresses($mail['to']));
    $ccList = implode(', ', $this->normalizeAddresses($mail['cc'] ?? []));
    $subject = $this->encodeHeader($mail['subject']);

    $headers = [];
    $headers[] = 'Date: ' . date('r');
    $headers[] = 'From: ' . $this->encodeAddress($fromName, $from);
    $headers[] = 'To: ' . $toList;
    if ($ccList !== '') {
      $headers[] = 'Cc: ' . $ccList;
    }
    if (!empty($mail['reply_to'])) {
      $headers[] = 'Reply-To: ' . $mail['reply_to'];
    }
    $headers[] = 'Subject: ' . $subject;
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundaryMixed . '"';

    $body = '';
    $body .= '--' . $boundaryMixed . "\r\n";
    $body .= 'Content-Type: multipart/alternative; boundary="' . $boundaryAlt . "\"\r\n\r\n";

    $body .= '--' . $boundaryAlt . "\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($mail['text'])) . "\r\n";

    $body .= '--' . $boundaryAlt . "\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($mail['html'])) . "\r\n";
    $body .= '--' . $boundaryAlt . "--\r\n";

    foreach ($mail['attachments'] ?? [] as $attachment) {
      $fileData = file_get_contents($attachment['path']);
      if ($fileData === false) {
        throw new RuntimeException('Could not read attachment: ' . $attachment['path']);
      }

      $body .= '--' . $boundaryMixed . "\r\n";
      $body .= 'Content-Type: image/png; name="' . $attachment['filename'] . "\"\r\n";
      $body .= "Content-Transfer-Encoding: base64\r\n";
      $body .= 'Content-ID: <' . $attachment['cid'] . ">\r\n";
      $body .= 'Content-Disposition: inline; filename="' . $attachment['filename'] . "\"\r\n\r\n";
      $body .= chunk_split(base64_encode($fileData)) . "\r\n";
    }

    $body .= '--' . $boundaryMixed . "--\r\n";

    // Dot-stuffing for SMTP DATA
    $body = preg_replace('/^\./m', '..', $body) ?? $body;

    return implode("\r\n", $headers) . "\r\n\r\n" . $body;
  }

  private function encodeAddress(string $name, string $email): string
  {
    return $this->encodeHeader($name) . ' <' . $email . '>';
  }

  private function encodeHeader(string $value): string
  {
    if (preg_match('/[^\x20-\x7E]/', $value)) {
      return '=?UTF-8?B?' . base64_encode($value) . '?=';
    }
    return $value;
  }
}
