import { NextResponse } from "next/server";
import { Resend } from "resend";

// Use your own Resend API key here
const resend = new Resend("re_debkAcRC_BMNBsheQCowBwL4s2SgpHA8G");

export async function POST(req: Request) {
  try {
    const { email, phone, message } = await req.json();

    if (!email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Email to the user
    await resend.emails.send({
      from: "Mallesh <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for Your Message!",
      html: `
        <h2>Thank you!</h2>
        <p>We’ve received your message:</p>
        <blockquote>${message}</blockquote>
        <p>We'll reach out to you soon at <strong>${phone}</strong>.</p>
      `,
    });

    // Email to the site owner (you)
    await resend.emails.send({
      from: "Mallesh <onboarding@resend.dev>",
      to: "malleshbitm460@gmail.com",
      subject: "portfolio Contact Submission",
      html: `
        <h3>New Contact Submitted</h3>
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
