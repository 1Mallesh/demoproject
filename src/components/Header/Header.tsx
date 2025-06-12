'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* Navbar brand */}
        <Navbar.Brand as={Link} href="/">MN</Navbar.Brand>
        {/* Toggler */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* Collapsible content */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: 'auto' }} navbarScroll>
            {/* Navigation Links */}
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/about-us">About</Nav.Link>
            <Nav.Link as={Link} href="/features">Features</Nav.Link>
            <Nav.Link as={Link} href="/retreat">Retreat</Nav.Link>
            <Nav.Link as={Link} href="/product">Product</Nav.Link>
            <Nav.Link as={Link} href="/contact">Contact Us</Nav.Link>
             <Nav.Link as={Link} href="/blogPost">Blog-detailes</Nav.Link>
            <Nav.Link as={Link} href="/Careers">Careers</Nav.Link>
            <Nav.Link as={Link} href="/Investors">Investors</Nav.Link>
            <Nav.Link as={Link} href="/serives">Services</Nav.Link>
            {/* Dropdown */}  
            <NavDropdown title="Select" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} href="/action1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/action2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="/action3">Something else here</NavDropdown.Item>
            </NavDropdown>
            {/* Disabled link */}
            <Nav.Link href="#" disabled>
              Disabled
            </Nav.Link>
          </Nav>
          {/* Search form */}
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
