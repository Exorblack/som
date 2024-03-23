"use client"
// components/Carousel.jsx
import React, { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import Image from "next/image";

const Carousel = () => {
  const images = [
    "images/logo/logoipsum-330.svg",
    "images/logo/logoipsum-274.svg",
    "images/logo/logoipsum-286.svg",
    "images/logo/logoipsum-332.svg",
    "images/logo/logoipsum-297.svg",
    "images/logo/logoipsum-331.svg",
  ]; 


  const [ref] = useMeasure();
  const [hoveredIndex, setHoveredIndex] = useState(-1); 



  return (
    <main>
      <div className="py-7 flex justify-center items-center font-bold text-4xl text-center bg-slate-300">
        <h3>More than +60 Website working with us</h3>
      </div>
    <div
      className={`w-full flex justify-center items-center overflow-x-scroll scroll-smooth snap-x snap-mandatory pt-8 gap-8 flex-wrap flex-row`}
      ref={ref} >
      {images.map((item, idx) => (
        <div
          key={idx}
          className={`snap-item w-fit px-4 transition duration-300 ease-in-out pb-16  ${
            hoveredIndex === idx ? "opacity-100 filter blur-0" : "opacity-70 filter blur-2"
          }`}
        >
          <Image
            src={item}
            alt={`Logo ${idx}`} 
            width={150} 
            height={150} 
            className={`object-contain mr-4`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(-1)}
          />
        </div>
      ))}
    </div>
    </main>
  );
};

export default Carousel;


