"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const images = [
  "/market/market1.jpg",
  "/market/market2.jpg",
  "/market/market3.jpg"
];

const Market = () => {
  return (
    <div className="bg-secondary min-h-screen pt-24 py-16 px-6 text-center">
      {/* Title Section */}
      <h1 className="text-5xl mb-6 text-black">Market</h1>

      {/* Carousel Section */}
      <div className="mb-10">
        <Carousel images={images} />
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Market division focuses on the importation and sale of premium construction materials. We supply top-quality products to meet the demands of industrial and commercial projects, ensuring reliability, efficiency, and cost-effectiveness for our clients.
        </p>
      </div>

    </div>
  );
};

export default Market;
