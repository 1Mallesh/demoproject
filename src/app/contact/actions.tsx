'use server';

import mongoose from 'mongoose';

let isConnected = false;

async function connectMongo() {
  if (isConnected) return;
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not defined');
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);
  isConnected = true;
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export async function saveContactToDB(form: any) {
  try {
    await connectMongo();
    const newContact = new Contact(form);
    await newContact.save();
    return { success: true };
  } catch (err) {
    console.error('❌ Failed to save contact:', err);
    return { success: false };
  }
}
