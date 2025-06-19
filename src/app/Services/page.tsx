'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaTools,
  FaServer,
  FaPalette,
  FaReact,
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Services() {
  const features = [
    {
      icon: <FaCode size={40} />,
      title: 'Clean Code',
      desc: 'I write readable, maintainable, and optimized code.',
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: 'Responsive Design',
      desc: 'Websites that work beautifully on all screen sizes.',
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Component-Based UI',
      desc: 'Reusable and scalable frontend components.',
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: 'UI Consistency',
      desc: 'Pixel-perfect implementation of UI/UX designs.',
    },
  ];

  const services = [
    {
      icon: <FaReact size={40} />,
      title: 'React.js Development',
      desc: 'Build powerful SPAs with reusable components, state management, and smooth routing.',
      action: 'View Projects',
    },
    {
      icon: <FaPalette size={40} />,
      title: 'Pixel-Perfect UI',
      desc: 'Convert Figma/Adobe XD designs into clean, responsive code with animations.',
      action: 'See UI Samples',
    },
    {
      icon: <FaServer size={40} />,
      title: 'API Integration',
      desc: 'Connect to RESTful/GraphQL APIs and display dynamic content.',
      action: 'Try Demo',
    },
    {
      icon: <FaTools size={40} />,
      title: 'Performance Optimization',
      desc: 'Boost speeds with code splitting, lazy loading, and image optimization.',
      action: 'View Stats',
    },
  ];

  return (
    <Container className="py-5 mt-5">
      {/* 🔥 Top Section with Typewriter Effect */}
      <Row className="mb-5 justify-content-center">
        <Col md={10} lg={8} className="text-center">
          <h3 className="fw-bold mb-3">
            I'm Mallesh and I'm a{' '}
            <span className="text-success">
              <Typewriter
                words={['Frontend Developer', 'React.js Developer', 'UI/UX Enthusiast','HTML/CSS Lover','NEXT.js Developer','Node.js Developer beginner','MongoDB Developer beginner  ']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <p className="text-muted">
            Seeking an entry-level opportunity with an esteemed organization where I can
            utilize my skills & enhance learning in the field of work. Capable of
            mastering new technologies.
          </p>
          <p className="text-muted mt-3">
            I'm a great communicator & love to invest the necessary time to understand
            the customer's problem very well.
          </p>
        </Col>
      </Row>

      <h2 className="text-center fw-bold mb-5">My Services</h2>

      {/* Section 1: Features */}
      <Row className="mb-5">
        {features.map((feature, index) => (
          <Col key={index} md={6} lg={3} className="mb-4 d-flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-100"
            >
              <Card className="text-center shadow-sm h-100 border-0 d-flex flex-column justify-content-center">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <div className="text-success mb-3">{feature.icon}</div>
                  <Card.Title className="fw-semibold">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Section 2: Functional Services */}
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={3} className="mb-4 d-flex">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="w-100"
            >
              <Card className="text-center shadow-lg h-100 border-0 d-flex flex-column justify-content-between">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <div className="text-primary mb-3">{service.icon}</div>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
                <div className="pb-4 text-center">
                  <Button variant="outline-success" size="sm">
                    {service.action}
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
