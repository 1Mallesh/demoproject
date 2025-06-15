'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaMobileAlt, FaLaptopCode, FaRocket } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Features() {
  const features = [
    {
      icon: <FaCode size={40} />,
      title: 'Clean Code',
      desc: 'I write readable, maintainable, and optimized code that follows modern best practices.',
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: 'Responsive Design',
      desc: 'My layouts adapt beautifully across all screen sizes using mobile-first design.',
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Modern Stack',
      desc: 'Experienced in Next.js, React, MongoDB, and more — delivering robust applications.',
    },
    {
      icon: <FaRocket size={40} />,
      title: 'Fast Delivery',
      desc: 'I work efficiently and deliver high-quality code within the deadline.',
    },
  ];

  return (
    <div style={{ background: '#000', padding: '80px 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#fff' }}>
          Why Choose Me?
        </h2>
        <Row className="g-4">
          {features.map((feat, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="text-center shadow-sm h-100 border-0 hover-zoom" style={{ transition: 'transform 0.3s' }}>
                <Card.Body>
                  <div className="icon-center mb-3 text-primary">{feat.icon}</div>
                  <Card.Title>{feat.title}</Card.Title>
                  <Card.Text>{feat.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .hover-zoom:hover {
          transform: scale(1.05);
        }
        .icon-center {
          width: fit-content;
          margin: 0 auto;
        }
        .card-title,
        .card-text {
          color: #fff;
        }
      `}</style>
    </div>
  );
}
