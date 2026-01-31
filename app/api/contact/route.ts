import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Accept both "name" and "fullName" (prevents form mismatch bugs)
    const name = String(body.name || body.fullName || "").trim();
    const email = String(body.email || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    /**
     * ✅ Honeypot spam protection:
     * If a bot fills this hidden field, we silently succeed but send NO email.
     * (Humans will never see/fill it.)
     */
    const company = String(body.company || "").trim();
    if (company) {
      return NextResponse.json({ ok: true });
    }

    // ✅ Basic validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    // ✅ Email format validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error("Missing env vars: GMAIL_USER or GMAIL_APP_PASSWORD");
      return NextResponse.json(
        { error: "Email service not configured on server." },
        { status: 500 }
      );
    }

    // Admin inbox (fallback to GMAIL_USER)
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || GMAIL_USER;
    const FROM_NAME = process.env.CONTACT_FROM_NAME || "Career Compass ZM";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const time = new Date().toISOString();

    // 1) ADMIN NOTIFICATION (to your inbox)
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${GMAIL_USER}>`,
      to: CONTACT_TO_EMAIL,
      subject: `New Contact Form Message — ${service}`,
      replyTo: email, // reply goes to customer
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 12px;">New Contact Submission (Career Compass ZM)</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f6f7f9;border:1px solid #e5e7eb;border-radius:12px;padding:14px;white-space:pre-wrap;">
            ${escapeHtml(message)}
          </div>
          <p style="margin-top: 14px; color:#6b7280; font-size: 12px;">
            Time: ${escapeHtml(time)}
          </p>
        </div>
      `,
    });

    // 2) CUSTOMER AUTO-REPLY (to the sender)
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${GMAIL_USER}>`,
      to: email,
      subject: "We received your message — Career Compass ZM",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <p>Hi ${escapeHtml(name)},</p>

          <p>Thank you for contacting <strong>Career Compass ZM</strong>. We have received your message under:</p>

          <p><strong>Service:</strong> ${escapeHtml(service)}</p>

          <p>Our team will respond shortly.</p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />

          <p style="margin: 0;"><strong>Your message:</strong></p>
          <div style="background:#f6f7f9;border:1px solid #e5e7eb;border-radius:12px;padding:14px;white-space:pre-wrap;">
            ${escapeHtml(message)}
          </div>

          <p style="margin-top: 16px;">
            Kind regards,<br/>
            <strong>Career Compass ZM</strong><br/>
            WhatsApp: +260 972 441 871
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// Basic HTML escape to prevent broken markup or injection
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}