"use client"
import React, { useState } from "react";
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs"
const ImageCaroussel = ({ slides }) => {
  const [slideIndex,setSlideIndex] = useState(0)
  console.log(slides);
  const prevSlide =()=>{
    setSlideIndex(slideIndex === 0 ? slides.length-1 : slideIndex-1)
  }
  const nextSlide =()=>{
    setSlideIndex(slideIndex === slides.length-1 ? 0 : slideIndex+1)
  }
  return (
    <div className="flex  items-center justify-between w-full h-[500px] relative">
      <BsFillArrowLeftSquareFill onClick={prevSlide} className="absolute w-10 h-10 text-white left-4   filter grayscale-50 shadow-md"/>
      {slides.map((slide, index) => {
        return (
          <>
            <img src={slide.src} alt={slide.alt} key={index} className={slideIndex===index ? "rounded-md shadow-sm w-full h-full":"hidden"}/>
          </>
        );
      })}
      <BsFillArrowRightSquareFill onClick={nextSlide} className="absolute w-10 h-10 text-white right-4  filter grayscale-50 shadow-md"/>
      <span className="absolute bottom-5 flex items-center justify-center gap-2 text-center right-56">
      {
        slides.map((_,ind)=>{
          return <button key={ind} onClick={()=>{setSlideIndex(ind)}} className={slideIndex ===ind ? "bg-white w-3 h-3  rounded-full focus:outline-none " :"w-3 h-3 rounded-full bg-gray-600"}></button>
        })
      }
      </span>
    </div>
  );
};

export default ImageCaroussel;
