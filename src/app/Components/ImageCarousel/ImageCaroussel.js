"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const ImageCarousel = ({ slides }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      {slides.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt}  className='w-full h-[500px]'/>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
