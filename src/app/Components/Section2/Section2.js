import React from "react";
import Image from "next/image";
import traffic from "../../../../public/Assets/traffic.jpg";
import Link from "next/link";

const Section2 = () => {
  return (
    <>
      <div className="grid grid-cols-12 py-8 px-14 gap-3">
        <div className="col-span-6 p-2">
          <Image src={traffic} />
        </div>
        <div className="col-span-6 p-2 flex flex-col gap-5 text-lg">
          <h1 className="font-bold text-2xl">
            {" "}
            Sitting at the intersection of all things culture and technology,
            Firefly’s mission is to bring dynamic storytelling to the streets of
            our cities.{" "}
          </h1>
          <div>
            <p>
              Fueled by the most advanced tracking, measurement, and
              optimization capabilities available in the out-of-home space,
              Firefly is an innovative data-first ad network. Leveraging the
              industry’s first-ever audience planning capabilities, we deliver
              the most relevant messages at the most relevant moments with our
              suite of dynamic on-car, in-car, and experiential solutions.
            </p>
          </div>
          <div>
            <p>
              Our proprietary screens deliver dynamic content using
              location-based, GPS-enabled triggers. We empower brands to
              efficiently engage consumers in North America’s busiest cities,
              including Austin, Boston, Chicago, Dallas, Houston, Las Vegas, Los
              Angeles, Miami, New York, San Francisco, and Washington D.C. and
              Toronto, with more markets being added to the list.
            </p>
          </div>
          <div>
            <p>
              With Firefly’s first-of-its-kind street level media platform, you
              can efficiently <Link href={""} className="text-textLinkColor underline">reach and engage your customers</Link> on their everyday
              journey.
            </p>
          </div>
          <div className="flex justify-center">
          <button className="bg-textLinkColor text-white p-2">Learn More</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
