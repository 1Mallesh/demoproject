'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import Image from 'next/image'; // ✅ FIXED: Add this import

export default function Header() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const routeMap: Record<string, string> = {
      home: '/',
      about: '/about-us',
      features: '/features',
      services: '/services',
      projects: '/projects',
      contact: '/contact',
      experience: '/experience',
    };

    const lowerQuery = query.toLowerCase().trim();

    if (routeMap[lowerQuery]) {
      router.push(routeMap[lowerQuery]);
    } else {
      alert('No matching page found!');
    }
  };

  return (
    <div className="fixed-top mb-5">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} href="/">
            <div className='d-flex algin-item-center'>
              <Image
                src="/logo2.png" // ✅ Must be in the /public folder
                alt="Site Logo"
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
              />
              <p className="ps-2 mb-0 mt-1 portfolio-name">Mallesh.N </p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              {/* <Nav.Link as={Link} href="/">Home</Nav.Link> */}
              <Nav.Link as={Link} href="/about-us">About</Nav.Link>
              <Nav.Link as={Link} href="/features">Features</Nav.Link>
              <Nav.Link as={Link} href="/Services ">Services</Nav.Link>
              <Nav.Link as={Link} href="/Projects">Projects</Nav.Link>
              <Nav.Link as={Link} href="/Contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} href="/Experience">Experience</Nav.Link>
              <NavDropdown title="Social-media" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/mallesh-n-265488189/" target="_blank">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/1Mallesh" target="_blank">GitHub</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://instagram.com/mallesh_nani_460" target="_blank">Instagram</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search by page"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
