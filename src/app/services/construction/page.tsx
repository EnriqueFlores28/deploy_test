"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const images = [
  "/construction/imgconst1.jpg",
  "/construction/imgconst2.jpg",
  "/construction/imgconst3.jpg"
];

const Construction = () => {
  return (
    <div className="bg-secondary min-h-screen pt-24 py-16 px-6 text-center">
      {/* Title Section */}
      <h1 className="text-5xl mb-6 text-black">Construction</h1>
      
      {/* Carousel Section */}
      <div className="mb-10">
        <Carousel images={images} />
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Construction division specializes in the development of high-quality industrial buildings tailored to the needs of the Korean manufacturing industry in Tijuana. 
          With 25 years of experience, we provide innovative and efficient construction solutions, ensuring durability, functionality, 
          and compliance with the highest industry standards.
        </p>
      </div>
    </div>
  );
};

export default Construction;
