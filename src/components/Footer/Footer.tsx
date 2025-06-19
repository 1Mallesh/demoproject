"use client";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaGlobe,
   FaBriefcase
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

import "../Footer/footer.css"; // Custom CSS if needed

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/Projects" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/Contact" },
    { label: "Experience", href: "/Experience" },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) return;

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (res.ok) {
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3000);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        const data = await res.json();
        alert(data.error || "Subscription failed.");
      }
    } catch (error) {
      console.error("Subscribe error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <footer className="footer-section position-relative text-white pt-5">
      <div className="wave-divider">
        <svg viewBox="0 0 120 28" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#00ffcc" />
              <stop offset="100%" stopColor="#1e1e2f" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C40,28 80,0 120,28 L120,0 L0,0 Z"
            fill="url(#waveGradient)"
          ></path>
        </svg>
      </div>
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5 className="fw-bold">Mallesh N</h5>
            <p>
              I’m a Frontend Developer passionate about building visually
              engaging and performant web applications.
            </p>
            <div className="d-flex flex-column gap-2 mt-3">
              <span className="d-flex align-items-center gap-2">
                <FaPhone />
                <a
                  href="tel:+919901946647"
                  className="text-white text-decoration-none"
                >
                  +91 9901946647
                </a>
              </span>
              <span className="d-flex align-items-center gap-2">
                <FaEnvelope />
                <a
                  href="mailto:malleshbitm460@gmail.com"
                  className="text-white text-decoration-none"
                >
                  malleshbitm460@gmail.com
                </a>
              </span>
              <span className="d-flex align-items-center gap-2">
                <FaGlobe />
                <a
                  href="https://malleshportfolio-next-js-mongodb.netlify.app/"
                  className="text-white text-decoration-none"
                  target="_blank"
                >
                  mallesh-react-js-portfolio.netlify.app
                </a>
              </span>
              
            </div>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {navLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href={link.href}
                    className="text-white text-decoration-none"
                  >
                    <span className="footer-link-hover">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Subscribe / Contact Me</h5>
            <Form onSubmit={handleSubscribe} className="d-flex flex-column gap-2">
              <Form.Control
                type="text"
                placeholder="Your name"
                className="rounded-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Form.Control
                type="tel"
                placeholder="Your phone number"
                className="rounded-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Form.Control
                type="email"
                placeholder="Your email"
                className="rounded-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message — e.g., job opportunity, project collaboration, or feedback"
                className="rounded-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button type="submit" variant="success" className="rounded-3">
                Submit
              </Button>
            </Form>
            {subscribed && (
              <div className="text-success mt-2">
                ✅ Submitted Successfully!
              </div>
            )}
            <div className="d-flex gap-3 mt-4 fs-4 social-icons">
              <a href="https://instagram.com/mallesh_nani_460" target="_blank" className="text-white footer-icon"><FaInstagram /></a>
              <a href="https://github.com/1Mallesh" target="_blank" className="text-white footer-icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mallesh-n-265488189/" target="_blank" className="text-white footer-icon"><FaLinkedin /></a>
              <a href="https://facebook.com" target="_blank" className="text-white footer-icon"><FaFacebook /></a>
              <a href="https://threads.net/mallesh_nani_460" target="_blank" className="text-white footer-icon"><FaThreads /></a>
              <a href="https://twitter.com" target="_blank" className="text-white footer-icon"><FaTwitter /></a>
              <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" className="text-white footer-icon"><FaBriefcase /></a>

              
            </div>
          </Col>
        </Row>
        <hr className="bg-light mt-4" />
        <p className="text-center mb-0">
          &copy; {currentYear} Mallesh N. Built with 💻 in Next.js.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
