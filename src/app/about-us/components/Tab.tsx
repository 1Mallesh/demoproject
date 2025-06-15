// File: Tab.tsx
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Tab() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count changed:", count);
  }, [count]);

  const evenNumbers = useMemo(() => {
    return numbers.filter(num => num % 2 === 0);
  }, [numbers]);

  const addNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1]);
  };

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <Container className="py-5">
      <Row className="mb-5">
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

      <Row>
        <Col md={6} className="mb-4">
          <Card className="p-3 shadow">
            <h3>🔢 Numbers</h3>
            <p>{numbers.join(', ')}</p>
            <h5>✅ Even Numbers (useMemo)</h5>
            <p>{evenNumbers.join(', ')}</p>
            <Button variant="primary" onClick={addNumber}>Add Number</Button>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 shadow">
            <h3>🔁 Count: {count}</h3>
            <Button variant="success" onClick={incrementCount}>Increment Count</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
