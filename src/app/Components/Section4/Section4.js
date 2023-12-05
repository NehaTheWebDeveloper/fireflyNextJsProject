import Link from "next/link";
import React from "react";
import Image from "next/image";
import meter from "../../../../public/Assets/meter.gif"
import circle from "../../../../public/Assets/circle.gif"
import bulb from "../../../../public/Assets/bulb.gif"


const Section4 = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-12 py-16 px-20">
          <div className="col-span-6">
            <h1 className="text-[45px] font-semibold">
              How you can leverage Firefly
            </h1>
          </div>
          <div className="col-span-6">
            <p className="text-[25px]">
              Deliver <Link href={""} className="underline">customizable and scalable campaigns</Link> based on geofencing,
              zip code, DMA, and day-parting. Serve advanced dynamic creative
              based on real-time triggers like weather, location of the car,
              time, and even a sports scoreboard. Measure ad effectiveness with
              foot traffic, brand recall, web and app conversion research and
              optimize campaigns with insights.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between px-48 py-20">
            <Image src={meter}/>
            <Image src={circle}/>
            <Image src={bulb}/>

        </div>

      </div>
    </>
  );
};

export default Section4;
