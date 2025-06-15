'use client';

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent() {
  return (
    <section className="accr_sectoon">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What skills do you have as a Front-End Developer?</Accordion.Header>
          <Accordion.Body>
            I specialize in HTML, CSS, JavaScript, React.js, Next.js, and responsive design. I also use tools like Git, Figma, and APIs for interactive UI.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Do you have experience with React and Next.js?</Accordion.Header>
          <Accordion.Body>
            Yes, I’ve built several applications using React and Next.js, including portfolios, dashboards, and eCommerce platforms with optimized SEO and routing.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How do you ensure responsive design?</Accordion.Header>
          <Accordion.Body>
            I use a mobile-first approach with CSS Flexbox, Grid, and media queries. I test layouts across various devices to ensure consistency.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Can you work with APIs and databases?</Accordion.Header>
          <Accordion.Body>
            Yes. I can fetch data from REST APIs and integrate with databases like MongoDB using backend technologies or API routes in Next.js.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default AccordionComponent;
