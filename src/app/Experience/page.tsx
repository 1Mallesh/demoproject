'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Fade } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';

export default function Experience() {
  const [show, setShow] = useState(false);
  const [experienceString, setExperienceString] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateExperience = () => {
      const joiningDate = new Date('2023-05-02');
      const today = new Date();

      let years = today.getFullYear() - joiningDate.getFullYear();
      let months = today.getMonth() - joiningDate.getMonth();
      let days = today.getDate() - joiningDate.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      setExperienceString(`${years} Year(s) ${months} Month(s) ${days} Day(s)`);
    };

    updateExperience();

    // Optional: Update every 24 hours if you want it to stay live
    const interval = setInterval(updateExperience, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="experience-section text-light py-5" style={{
      background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
      minHeight: '100vh'
    }}>
      <Container className='mt-5 pt-md-5'>
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
