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
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

import "../Footer/footer.css"; // Import your custom CSS for footer styles

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/Projects" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed email:", email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="footer-section position-relative text-white pt-5">
      {/* WAVE Divider */}
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

      {/* Animated Background Layer */}
      <div className="footer-bg-animation"></div>

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
                <a href="tel:+911234567890" className="text-white text-decoration-none">
                  +91 9901946647
                </a>
              </span>
              <span className="d-flex align-items-center gap-2">
                <FaEnvelope />
                <a href="mailto:malleshbitm460@gmail.com" className="text-white text-decoration-none">
                  malleshbitm460@gmail.com
                </a>
              </span>
            </div>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {navLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link href={link.href} className="text-white text-decoration-none">
                    <span className="footer-link-hover">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="fw-bold">Subscribe for Updates</h5>
            <Form onSubmit={handleSubscribe} className="d-flex flex-column gap-2">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="rounded-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="success" className="rounded-3">
                Subscribe
              </Button>
            </Form>
            {subscribed && (
              <div className="text-success mt-2">✅ Subscribed Successfully!</div>
            )}
            <div className="d-flex gap-3 mt-4 fs-4 social-icons">
              <a href="https://instagram.com/mallesh_nani_460" target="_blank" className="text-white footer-icon"><FaInstagram /></a>
              <a href="https://github.com/1Mallesh" target="_blank" className="text-white footer-icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mallesh-n-265488189/" target="_blank" className="text-white footer-icon"><FaLinkedin /></a>
              <a href="https://facebook.com" target="_blank" className="text-white footer-icon"><FaFacebook /></a>
              <a href="https://threads.net/mallesh_nani_460" target="_blank" className="text-white footer-icon"><FaThreads /></a>
              <a href="https://twitter.com" target="_blank" className="text-white footer-icon"><FaTwitter /></a>
            </div>
          </Col>
        </Row>

        <hr className="bg-light mt-4" />
        <p className="text-center mb-0">
          &copy; {currentYear} Mallesh N. Built with 💻 in Next.js.
        </p>
      </Container>

      <style jsx>{`
       
      `}</style>
    </footer>
  );
};

export default Footer;
