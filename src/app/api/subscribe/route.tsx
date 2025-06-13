import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// MongoDB connect
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI || '', {
    dbName: 'new_sub',
  });
};

// Subscriber schema
const SubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);

// POST handler
export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Save to DB
    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return NextResponse.json({ error: 'Already Subscribed' }, { status: 409 });
    }
    await new Subscriber({ email }).save();

    // Send email with your contact details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Mallesh N" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thanks for Subscribing — My Contact Info Inside',
      html: `
        <h2>Hello!</h2>
        <p>Thanks for subscribing to my portfolio. Here are my details:</p>
        <ul>
          <li><strong>Name:</strong> Mallesh N</li>
          <li><strong>Email:</strong> malleshbitm460@gmail.com</li>
          <li><strong>Phone:</strong> +91 9901946647</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mallesh-n-265488189/">Connect here</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/1Mallesh">View my work</a></li>
        </ul>
        <p>Feel free to reach out for collaboration or job opportunities.</p>
        <p>Regards,<br/>Mallesh N</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Subscribed and mail sent!' }, { status: 200 });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
