import { NextResponse } from "next/server";
import { Resend } from "resend";

// Replace this with your real API key securely
const resend = new Resend("re_debkAcRC_BMNBsheQCowBwL4s2SgpHA8G");

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Validate input
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send email to user
    await resend.emails.send({
      from: "Mallesh <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for Your Message!",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We’ve received your message:</p>
        <blockquote>${message}</blockquote>
        <p>We'll contact you soon at <strong>${phone}</strong>.</p>
      `,
    });

    // Send email to Mallesh (site owner)
    await resend.emails.send({
      from: "Mallesh <onboarding@resend.dev>",
      to: "malleshbitm460@gmail.com",
      subject: "New Portfolio Contact Submission",
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
      `,
    });

    return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
