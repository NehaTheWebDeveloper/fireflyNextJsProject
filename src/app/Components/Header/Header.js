import React from "react";
import Image from "next/image";
import bg from "../../../../public/Assets/carr.jpg";
import MainHeader from "../MainHeader/MainHeader";

const Header = () => {
  return (
    <div className="relative h-[580px]"> 
      <Image
        src={bg}
        alt="Header Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={80} 
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute  flex flex-col justify-center ">
        <MainHeader/>
        <div className="">
          <div className="pt-24 px-20 ">
            <h1 className="text-[48px] md:text-[80px] font-bold text-white tracking-tight leading-normal">
             <strong> Lighting Up City Streets with Smart Screens and Smarter Data.</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
