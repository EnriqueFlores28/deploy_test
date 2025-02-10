"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const images = [
  "/warehouse1.jpg",
  "/warehouse2.jpg",
  "/warehouse3.jpg"
];

const Warehousing = () => {
  return (
    <div className="bg-white min-h-screen pt-24 py-16 px-6 text-center">
      {/* Title Section */}
      <h1 className="text-5xl font-bold mb-6 text-black">Warehousing</h1>
      
      {/* Carousel Section */}
      <div className="mb-10">
        <Carousel images={images} />
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Warehousing division offers industrial storage solutions through the rental of high-quality warehouses. Designed to meet the needs of the manufacturing and logistics sectors, our facilities provide secure, strategic, and flexible spaces that optimize operations and inventory management.
        </p>
      </div>
    </div>
  );
};

export default Warehousing;
