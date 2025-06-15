'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Fade } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';

export default function Experience() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const joiningDate = new Date('2023-05-02');
  const today = new Date();
  const diffYears = today.getFullYear() - joiningDate.getFullYear();
  const diffMonths = today.getMonth() - joiningDate.getMonth() + diffYears * 12;
  const experienceString = `${Math.floor(diffMonths / 12)} Year(s) ${diffMonths % 12} Month(s)`;

  return (
    <div className="experience-section animated-bg">
      <Container>
        <h2 className="text-center mb-5 text-white">My Experience</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Fade in={show}>
              <div>
                <Card style={{ backgroundColor: '#fff', border: '1px solid #333', borderRadius: '12px' }}>
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <FaLaptopCode size={40} className="me-3 text-success" />
                      <div>
                        <h4 className="mb-1">Front-End Software Developer</h4>
                        <p className="mb-0 text-muted">Terralogic Software Solutions Pvt. Ltd.</p>
                        <small className="text-info">May 2, 2022 – Present</small>
                      </div>
                    </div>
                    <p>
                      I'm currently working as a Front-End Developer at <strong>Terralogic</strong>, focusing on building interactive, responsive, and user-friendly web applications using technologies like React.js, Next.js, and JavaScript. I collaborate closely with UI/UX designers and backend developers to deliver seamless user experiences.
                    </p>
                    <p className="mt-3"><strong>Duration:</strong> {experienceString}</p>
                  </Card.Body>
                </Card>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
