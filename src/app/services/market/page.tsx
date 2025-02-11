"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const images = [
  "/market/market1.jpg",
  "/market/market2.jpg",
  "/market/market3.jpg"
];

const materials = [
  { name: "Concrete", description: "High-strength concrete for industrial use", price: "$50 per ton" },
  { name: "Steel Beams", description: "Durable structural steel beams", price: "$200 per unit" },
  { name: "Bricks", description: "Premium quality bricks for construction", price: "$1 per brick" },
  { name: "Insulation Panels", description: "Thermal and soundproof insulation panels", price: "$30 per sheet" }
];

const Market = () => {
  return (
    <div className="bg-secondary min-h-screen pt-24 py-16 px-6 text-center">
      {/* Title Section */}
      <h1 className="text-5xl font-bold mb-6 text-black">Market</h1>
      
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

      {/* Materials Table Section */}
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Available Materials</h2>
        <p className="text-lg text-gray-600 mb-6">
          Here are some of the high-quality materials we provide to support your industrial and commercial construction projects.
        </p>
        <table className="w-full border-collapse border border-blue-500 shadow-lg">
          <thead className="bg-blue-600 text-white text-lg">
            <tr>
              <th className="border border-blue-500 px-6 py-3">Material</th>
              <th className="border border-blue-500 px-6 py-3">Description</th>
              <th className="border border-blue-500 px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material, index) => (
              <tr key={index} className="bg-blue-100 hover:bg-blue-200 text-black">
                <td className="border border-blue-500 px-6 py-3 font-medium">{material.name}</td>
                <td className="border border-blue-500 px-6 py-3">{material.description}</td>
                <td className="border border-blue-500 px-6 py-3 font-semibold">{material.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;
