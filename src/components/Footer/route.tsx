import { NextResponse } from "next/server";
import { Resend } from "resend";

// ✅ Paste your Resend API key below
const resend = new Resend("re_debkAcRC_BMNBsheQCowBwL4s2SgpHA8G"); // Your API key

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: "Mallesh <onboarding@resend.dev>", // Do not change this unless your domain is verified
      to: [email],
      subject: "Thanks for reaching out!",
      html: `
        <p>Hi,</p>
<p>Thanks for subscribing! Here's my contact information if you'd like to connect with me:</p>        <p><strong>My Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> Mallesh N</li>
          <li><strong>Email:</strong> malleshbitm460@gmail.com</li>
          <li><strong>Phone:</strong> +91 9901946647</li>
        </ul>
        <p>Have a great day! 😊</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
