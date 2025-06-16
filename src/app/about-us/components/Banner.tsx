'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

const Banner = () => {
  const [slides, setSlides] = useState<
    { image: string; title: string; subtitle: string }[]
  >([]);

  useEffect(() => {
    // Simulated API fetch
    const fetchSlides = async () => {
      const data = [
        {
          image: 'https://picsum.photos/1600/600?random=1',
          title: 'Creative Front-End Developer',
          subtitle: 'Building engaging user experiences with passion',
        },
        {
          image: 'https://picsum.photos/1600/600?random=2',
          title: 'Responsive UI Specialist',
          subtitle: 'Crafting interfaces that work on every device',
        },
        {
          image: 'https://picsum.photos/1600/600?random=3',
          title: 'Pixel Perfect Design',
          subtitle: 'Translating designs into clean HTML/CSS',
        },
        {
          image: 'https://picsum.photos/1600/600?random=4',
          title: 'Interactive React Developer',
          subtitle: 'Making dynamic UIs with React & Next.js',
        },
        {
          image: 'https://picsum.photos/1600/600?random=5',
          title: 'Performance Focused',
          subtitle: 'Optimizing front-end for speed and efficiency',
        },
      ];
      setSlides(data);
    };

    fetchSlides();
  }, []);

  return (
    <div className="banner-wrapper">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        effect="fade"
        className="banner-swiper"
       
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                position: 'relative',
              }}
            >
              <div className="slide-content" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                
                color: '#fff',
                maxWidth: '600px'
              }}>
                <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>{slide.title}</h1>
                <p style={{ fontSize: '20px', fontWeight: '300' }}>{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
