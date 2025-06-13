'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="home-section" style={{ padding: '100px 0', backgroundColor: '#000' }}>
            <Container>
                <section>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start text-white">
                            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                                Hi, I'm <span style={{ color: '#007bff' }}>Mallesh</span>
                            </h1>
                            <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
                                I'm a passionate Front-End Developer with 1 year of experience building responsive web apps using React, JavaScript, and Next.js.
                            </p>
                            <Link href="#contact" passHref>
                                <Button variant="primary" style={{ marginTop: '30px' }}>
                                    Contact Me
                                </Button>
                            </Link>
                        </Col>
                        <Col md={6} className="text-center mt-5 mt-md-0">
                            <Image
                                src="/loptop.jpg" // make sure this exists in /public
                                alt="Profile"
                                width={350}
                                height={350}
                                style={{ borderRadius: '50%' }}
                            />
                        </Col>
                    </Row>
                </section>

                <section className="mt-5 second_section text-white">
    <h2 className="text-center mb-4">My Skills</h2>
    <Row className="justify-content-center text-center">
        {[
            {
                name: 'HTML5',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            },
            {
                name: 'CSS3',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            },
            {
                name: 'JavaScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            },
            {
                name: 'React',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            },
            {
                name: 'Next.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            },
        ].map((skill, index) => (
            <Col key={index} xs={6} sm={4} md={2} className="mb-4">
                <div className="skill-card p-3 rounded shadow-sm bg-dark">
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        width={60}
                        height={60}
                        style={{ objectFit: 'contain',margin: '0 auto' }}
                    />
                    <p className="mt-2">{skill.name}</p>
                </div>
            </Col>
        ))}
    </Row>
</section>

            </Container>
        </div>
    );
}
