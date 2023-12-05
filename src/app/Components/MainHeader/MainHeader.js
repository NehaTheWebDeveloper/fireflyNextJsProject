"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("/api/logout");
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div
        className={`grid grid-cols-12 py-5 px-8 border-b fixed w-full ${
          isScrolled ? "bg-black" : "bg-transparent"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="col-span-6">
          <h2 className={`text-lg ${isScrolled ? "text-white" : "text-white"}`}>
            FIREFLY
          </h2>
        </div>
        <div className="col-span-6 flex justify-between items-center gap-2">
          <h2 className={`${isScrolled ? "text-white" : "text-white"}`}>
            Advertisers
          </h2>
          <h2 className={`${isScrolled ? "text-white" : "text-white"}`}>
            City Partners
          </h2>
          <h2 className={`${isScrolled ? "text-white" : "text-white"}`}>
            Drivers
          </h2>
          <h2 className={`${isScrolled ? "text-white" : "text-white"}`}>
            About Us
          </h2>
          <h2 className={`${isScrolled ? "text-white" : "text-white"}`}>
            Blog
          </h2>
          <h2 className={`${isScrolled ? "text-white" : "text-white"}`}>
            Contact
          </h2>
          <button
            className="bg-transparent px-6 py-2 rounded border hover:border border-white text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
