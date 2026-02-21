
export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

   const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

    await transporter.sendMail({
      from: `"Fitness Plus Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      /* html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `, */
      html: `
<div style="font-family: Arial, Helvetica, sans-serif; font-size:15px; line-height:1.6; color:#222;">
  
  <h3 style="margin-bottom:15px; font-weight:600;">
    New Inquiry
  </h3>

  <p style="margin:6px 0;">
    <strong>Name:</strong> ${name}
  </p>

  <p style="margin:6px 0;">
    <strong>Email:</strong> ${email}
  </p>

  <p style="margin:6px 0;">
    <strong>Message:</strong>
  </p>

  <p style="margin:6px 0 15px 0;">
    ${message}
  </p>

  <hr style="border:none; border-top:1px solid #e5e5e5; margin:20px 0;" />

  <p style="font-size:13px; color:#777;">
    This message was submitted through the Fitness Plus website contact form.
  </p>

</div>
`
    });

// Send confirmation email to User
    await transporter.sendMail({
  from: `"Fitness Plus" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "We received your inquiry!",
 /*  html: `
    <h3>Hi ${name},</h3>
    <p>Thank you for contacting Fitness Plus.</p>
    <p>Our team will get back to you shortly.</p>
    <br />
    <p>- Fitness Plus Team</p>
  `, */
  html: `
<div style="font-family: Arial, Helvetica, sans-serif; font-size:15px; line-height:1.7; color:#222;">
  
  <h3 style="margin-bottom:15px; font-weight:600;">
    Hi ${name},
  </h3>

  <p style="margin:10px 0;">
    Thank you for reaching out to Fitness Plus.
  </p>

  <p style="margin:10px 0;">
    We have received your message and will get back to you as soon as possible.
  </p>

  <p style="margin-top:20px;">
    Best regards,<br />
    <strong>Fitness Plus Team</strong>
  </p>

</div>
`
});

    return NextResponse.json({ success: true });

  } catch (error) {
  console.error("EMAIL ERROR:", error);
  return NextResponse.json(
    { success: false, error: "Email failed to send." },
    { status: 500 }
  );
}
}
