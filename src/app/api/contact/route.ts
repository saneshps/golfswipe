import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "saneshbigleap@gmail.com";

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

    const html = `
      <div style="font-family: Arial, sans-serif; color: #03372b; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">New GolfSwipe contact form submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Full name</td>
            <td style="padding: 8px 0;">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email</td>
            <td style="padding: 8px 0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone</td>
            <td style="padding: 8px 0;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Subject</td>
            <td style="padding: 8px 0;">${escapeHtml(subject)}</td>
          </tr>
        </table>
        <div style="margin-top: 20px;">
          <p style="margin: 0 0 8px; font-weight: bold;">Message</p>
          <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"GolfSwipe Contact" <${smtpUser}>`,
      to: TO_EMAIL,
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
