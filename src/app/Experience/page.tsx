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
    <div className="experience-section text-light py-5" style={{
      background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
      minHeight: '100vh'
    }}>
      <Container>
        <h2 className="text-center mb-5 fw-bold display-5">Professional Experience</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Fade in={show}>
              <div>
                <Card className="shadow-lg border-0" style={{ borderRadius: '20px' }}>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start mb-4">
                      <FaLaptopCode size={50} className="text-primary me-4 mt-1" />
                      <div>
                        <h4 className="fw-semibold mb-1">Front-End Developer</h4>
                        <p className="mb-1 text-muted">Terralogic Software Solutions Pvt. Ltd.</p>
                        <small className="text-secondary">May 2, 2023 – Present</small>
                      </div>
                    </div>
                    <p>
                      At <strong>Terralogic</strong>, I specialize in crafting high-performance, scalable, and accessible web interfaces. My role involves converting complex UI/UX designs into interactive React.js components, optimizing performance, and ensuring responsive layouts using frameworks like Next.js, TypeScript, and TailwindCSS.
                    </p>
                    <p>
                      I also contribute to code reviews, component reusability improvements, and collaborate with cross-functional teams to deliver quality user-centered web products.
                    </p>
                    <hr />
                    <p className="mb-0"><strong>Total Experience:</strong> {experienceString}</p>
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
