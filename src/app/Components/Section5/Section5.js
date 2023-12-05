import React from "react";
import Image from "next/image";
import car from "../../../../public/Assets/carinvblack.jpg";
const Section5 = () => {
  return (
    <>
      <div className="bg-black">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 px-20 py-8">
            <Image src={car} />
          </div>
          <div className="col-span-6 px-20 py-8">
            <h1 className="text-white text-[35px] pt-20">
              Drivers: Earn more per mile
            </h1>
            <p className="text-white text-[25px] pt-12">
              Firefly helps supercharge your drive time with extra income.
              Download the app and apply today.
            </p>
            <div className="flex justify-start pt-8">
              <button className="bg-textLinkColor text-white p-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
