"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const slides = [
  { src: "/market/market1.jpg", caption: "Sample Text 1" },
  { src: "/market/market2.jpg", caption: "Sample Text 2" },
  { src: "/market/market3.jpg", caption: "Sample Text 3" }
];

const Market = () => {
  return (
    <div className="bg-secondary min-h-screen pt-24 py-16 px-6 text-center">
      <h1 className="text-5xl mb-6 text-black">Market</h1>

      <div>
        <Carousel slides={slides} />
      </div>

      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Market division focuses on the importation and sale of premium construction materials. We supply top-quality products to meet the demands of industrial and commercial projects, ensuring reliability, efficiency, and cost-effectiveness for our clients.
        </p>
      </div>

    </div>
  );
};

export default Market;
