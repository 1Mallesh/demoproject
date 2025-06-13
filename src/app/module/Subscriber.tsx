'use client';

import React, { useState } from 'react';

export default function SubscribeForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState({ name: '', phone: '', address: '' });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setStep(2); // Go to next form
    } else {
      alert(data.error);
    }
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe/details', {
      method: 'POST',
      body: JSON.stringify({ email, ...details }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Thank you! Your details were saved.');
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleEmailSubmit}>
          <h3>Subscribe with Email</h3>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button type="submit">Subscribe</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleDetailsSubmit}>
          <h3>Enter Your Details</h3>
          <input
            type="text"
            required
            placeholder="Name"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
          <input
            type="tel"
            required
            placeholder="Contact Number"
            value={details.phone}
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          />
          <input
            type="text"
            required
            placeholder="Address"
            value={details.address}
            onChange={(e) => setDetails({ ...details, address: e.target.value })}
          />
          <button type="submit">Submit Details</button>
        </form>
      )}
    </div>
  );
}
