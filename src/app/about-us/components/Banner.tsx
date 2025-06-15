'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

const Banner = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Simulate image fetch from an API
    const fetchImages = async () => {
      const urls = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/1600/600?random=${i + 1}`);
      setImages(urls);
    };
    fetchImages();
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
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="slide" style={{ backgroundImage: `url(${url})` }}>
              <div className="slide-content">
                <h1 className="headline">Creative Front-End Developer</h1>
                <p className="subtext">Building engaging user experiences</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
