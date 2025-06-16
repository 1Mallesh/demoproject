// File: Tab.tsx
"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';

interface Experience {
  company: string;
  role: string;
  duration: string;
  type: 'Frontend' | 'Backend' | 'Full Stack';
  description: string;
}

export default function Tab() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Full Stack'>('All');

  const experiences: Experience[] = useMemo(() => [
    {
      company: "Terralogic Software Solutions",
      role: "Frontend Developer",
      duration: "2021 - Present",
      type: "Frontend",
      description: "Building scalable, responsive UI using React.js, TypeScript, and Tailwind CSS."
    },
    {
      company: "ABC",
      role: "Full Stack Developer",
      duration: "2020 - 2021",
      type: "Full Stack",
      description: "Worked on microservices and UI components using Node.js and React."
    },
    {
      company: "DEF",
      role: "React Developer",
      duration: "2019 - 2020",
      type: "Frontend",
      description: "Developed and maintained React-based web applications with Redux."
    },
    {
      company: "IJKL",
      role: "Backend Developer Intern",
      duration: "2018 - 2019",
      type: "Backend",
      description: "Built REST APIs with Express and MongoDB; wrote unit tests."
    }
  ], []);

  const filteredExperiences = useMemo(() => {
    if (filter === 'All') return experiences;
    return experiences.filter(exp => exp.type === filter);
  }, [filter, experiences]);

  const incrementCount = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <Container className="py-5 mt-5">
      <Row className="mb-4">
        <Col>
          <Card className="text-center shadow p-4" style={{ backgroundColor: '#f0f9ff' }}>
            <h2 className="mb-3">👨‍🎓 Education</h2>
            <p>
              Bachelor of Engineering (BE), <strong>BITM College, Ballari</strong> – <strong>2022</strong>
            </p>
            <p>
              Completed <strong>Java Full Stack Development</strong> course at <strong>JSpiders</strong>
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="align-items-center mb-4 mt-5">
        <Col md={6}>
          <h3>🧑‍💼 Experience <Badge bg="info">{filteredExperiences.length} roles</Badge></h3>
        </Col>
        <Col md={6}>
          <Form.Select value={filter} onChange={(e) => setFilter(e.target.value as any)}>
            <option value="All">All</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Full Stack">Full Stack</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {filteredExperiences.map((exp, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <Card className="shadow-sm p-3 h-100">
              <h5>{exp.role} at <strong>{exp.company}</strong></h5>
              <small className="text-muted">{exp.duration} • <Badge bg="secondary">{exp.type}</Badge></small>
              <p className="mt-2">{exp.description}</p>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
}
