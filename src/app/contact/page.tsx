'use client';

import { useState, useTransition } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { saveContactToDB } from './actions';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
    message: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    startTransition(async () => {
      const res = await saveContactToDB(form);
      if (res.success) {
        setSuccess('Thank you! Your message was sent successfully.');
        setForm({
          name: '',
          email: '',
          mobile: '',
          role: '',
          message: '',
        });
      } else {
        setError('Something went wrong. Please try again later.');
      }
    });
  };

  return (
    <div className="contact-bg">
      <Container className="py-5">
        <Card className="form-card p-4">
          <h2 className="text-center mb-4">Get in Touch</h2>

          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    required
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="animated-input"
                  />
                  <Form.Label>Name</Form.Label>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    required
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="animated-input"
                  />
                  <Form.Label>Email</Form.Label>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    type="tel"
                    placeholder="Mobile"
                    value={form.mobile}
                    required
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="animated-input"
                  />
                  <Form.Label>Mobile Number</Form.Label>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Role"
                    value={form.role}
                    required
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="animated-input"
                  />
                  <Form.Label>Role</Form.Label>
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="form-floating mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Message"
                    style={{ height: '120px' }}
                    value={form.message}
                    required
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="animated-input"
                  />
                  <Form.Label>Message</Form.Label>
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center">
              <Button type="submit" disabled={isPending}>
                {isPending ? 'Sending...' : 'Submit'}
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
