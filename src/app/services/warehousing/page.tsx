"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const images = [
  "/final/Slide16.JPG",
  "/final/Slide20.JPG",
  "/final/Slide31.JPG"
];

const materials = [
  { name: "CASAPIA WAREHOUSE 1", cdate: "?/?/?", location: "?", area: "?" },
  { name: "CASAPIA WAREHOUSE 2", cdate: "?/?/?", location: "?", area: "?" },
  { name: "CASAPIA WAREHOUSE 3", cdate: "?/?/?", location: "?", area: "?" },
];

const Warehousing = () => {
  return (
    <div className="bg-secondary min-h-screen pt-24 py-16 px-6 text-center">
      {/* Title Section */}
      <h1 className="text-5xl mb-6 text-black">Warehousing</h1>

      {/* Carousel Section */}
      <div className="mb-10">
        <Carousel images={images} />
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto bg-secondary mb-10 p-8 rounded-xl shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Warehousing division offers industrial storage solutions through the rental of high-quality warehouses. Designed to meet the needs of the manufacturing and logistics sectors, our facilities provide secure, strategic, and flexible spaces that optimize operations and inventory management.
        </p>
      </div>

      {/* Warehousing Table Section for Desktop */}
      <div className="max-w-5xl mx-auto overflow-x-auto hidden md:block">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Available Warehousing Solutions</h2>
        <p className="text-lg text-gray-600 mb-6">
          Here you will find all the warehouses we offer to support your manufacturing and logistics needs.
        </p>
        <table className="w-full min-w-[600px] border-collapse border border-blue-500 shadow-lg">
          <thead className="bg-blue-600 text-white text-lg">
            <tr>
              <th className="border border-blue-500 px-6 py-3">Name</th>
              <th className="border border-blue-500 px-6 py-3">Construction Date</th>
              <th className="border border-blue-500 px-6 py-3">Location</th>
              <th className="border border-blue-500 px-6 py-3">Building Area</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material, index) => (
              <tr key={index} className="bg-blue-100 hover:bg-blue-200 text-black">
                <td className="border border-blue-500 px-6 py-3 font-medium">{material.name}</td>
                <td className="border border-blue-500 px-6 py-3">{material.cdate}</td>
                <td className="border border-blue-500 px-6 py-3">{material.location}</td>
                <td className="border border-blue-500 px-6 py-3 font-semibold">{material.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Cards for Mobile */}
      <div className="md:hidden">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Available Warehousing Solutions</h2>
        <p className="text-lg text-gray-600 mb-6">
          Here you will find all the warehouses we offer to support your manufacturing and logistics needs.
        </p>
        {materials.map((material, index) => (
          <div key={index} className="bg-blue-100 p-4 mb-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-black">{material.name}</h3>
            <p className="text-gray-700">Construction Date: {material.cdate}</p>
            <p className="text-gray-700">Location: {material.location}</p>
            <p className="font-bold text-blue-600">Building Area: {material.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warehousing;
