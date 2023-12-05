import React from 'react';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import Chicago from "../../../../public/Assets/Chicago.jpg";
import Dallas from "../../../../public/Assets/Dallas.jpg";
import Houston from "../../../../public/Assets/Houston.jpg";
import LA from "../../../../public/Assets/LA.jpg";
import w from "../../../../public/Assets/w.jpg";

const images = [
  Chicago,
  Dallas,
  Houston,
  LA,
  w,
];

const Section3 = () => {
  return (
    <div>
      <h1>Image Carousel Example</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default Section3;
