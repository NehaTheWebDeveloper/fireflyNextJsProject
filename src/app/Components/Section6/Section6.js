import React from "react";
import Image from "next/image";
import card1 from "../../../../public/Assets/card1.png";
import card2 from "../../../../public/Assets/card2.jpg";
import card3 from "../../../../public/Assets/card3.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const cardData = [
  {
    image: card1,
    content: "Firefly’s DOOH Network Drives Purchase Lift for Tier 1 Auto",
    readMore: "Read More",
    iconRight: <AiOutlineArrowRight />,
    date: "May 18 2023",
  },
  {
    image: card2,
    content: "Firefly’s DOOH Network Drives Purchase Lift for Tier 1 Auto",
    readMore: "Read More",
    iconRight: <AiOutlineArrowRight />,
    date: "March 18 2023",
  },
  {
    image: card3,
    content: "Firefly’s DOOH Network Drives Purchase Lift for Tier 1 Auto",
    readMore: "Read More",
    iconRight: <AiOutlineArrowRight />,
    date: "September 28 2023",
  },
];
const Section6 = () => {
  return (
    <>
      <div className="py-20 px-28">
        <div className="flex flex-col">
          <h1 className="text-[50px] font-semibold">Firefly in the News</h1>
          <div className="flex items-center pt-12">
            {cardData.map((card)=>{
                return(
                    <>
                    <div className="flex flex-col gap-4 p-3">
                        <Image src={card.image}/>
                        <p className="text-[25px] text-gray-700">{card.content}</p>
                        <div className="flex items-center">
                        <Link href={""} className="text-[14px] text-gray-700">{card.readMore}</Link>
                        <span>{card.iconRight}</span>
                        </div>
                        <div className="text-[14px] text-gray-700">{card.date}</div>

                    </div>
                    </>
                )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
