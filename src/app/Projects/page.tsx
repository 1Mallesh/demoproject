'use client';

import React, { useState } from 'react';
import { Container, Form, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const projectList = [
  'sbi-life',
  'asato-cms',
  'axio-cms',
  'cloudhop',
  'collabera',
  'collabera-Gcc',
  'collabera-gtc',
  'collabera-gtc-v2',
  'custom-admin-ui',
  'hdfc-ecareer',
  'hexaware-v2',
  'infakt-cms',
  'Jaro-Education',
  'kotaklife-corporate-webiste',
  'lollypop-v2-cms',
  'myntra_life',
  'nh-cayman-island-cms',
  'reya-cms',
  'royal-sundaram-html',
  'sundram-alternatives',
  'tattva-cms',
  'titanteal',
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectList.filter((project) =>
    project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-5 mt-5">
      <h2 className="text-center mb-4">My Projects</h2>

      <Form.Control
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card className="project-card h-100 text-center border-0 shadow-sm">
              <div className="project-card-body p-4">
                <h5 className="project-title mb-3">
                  {project.replace(/-/g, ' ')}
                </h5>
                <p className="project-desc">
                  Frontend development with <strong>React</strong> & CMS
                  integration.
                </p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination d-flex justify-content-center mt-4" />
    </Container>
  );
}
