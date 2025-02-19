"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const images = [
  "/final/Slide16.JPG",
  "/final/Slide20.JPG",
  "/final/Slide31.JPG"
];

const materials = [
  {
    name: "CASAPIA WAREHOUSE 1",
    cdate: "?/?/?",
    location: "Tijuana, Mexico",
    area: "?",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1456.848438195803!2d-116.80918783800098!3d32.46340157952854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947851a84432b%3A0x89af8401eb17c742!2sCasapia%20Construccion%20S.%20De%20RL.%20de%20CV.!5e0!3m2!1ses-419!2smx!4v1739558123336!5m2!1ses-419!2smx"
  },
  {
    name: "CASAPIA WAREHOUSE 2",
    cdate: "?/?/?",
    location: "Tijuana, Mexico",
    area: "?",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1456.848438195803!2d-116.80918783800098!3d32.46340157952854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947851a84432b%3A0x89af8401eb17c742!2sCasapia%20Construccion%20S.%20De%20RL.%20de%20CV.!5e0!3m2!1ses-419!2smx!4v1739558123336!5m2!1ses-419!2smx"
  },
  {
    name: "CASAPIA WAREHOUSE 3",
    cdate: "?/?/?",
    location: "Tijuana, Mexico",
    area: "?",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1456.848438195803!2d-116.80918783800098!3d32.46340157952854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947851a84432b%3A0x89af8401eb17c742!2sCasapia%20Construccion%20S.%20De%20RL.%20de%20CV.!5e0!3m2!1ses-419!2smx!4v1739558123336!5m2!1ses-419!2smx"
  }
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
        <p className="text-lg text-gray-600 leading-relaxed">
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

      {/* Map Iframes Section */}
      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-black mb-4">Warehouse Locations</h2>
        <p className="text-lg text-gray-600 mb-6">
          Below are the locations of our warehouses. Click on the maps to explore.
        </p>
        {materials.map((material, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-black">{material.name}</h3>
            <p className="text-gray-700 mb-2">{material.location}</p>
            <iframe
              src={material.mapUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warehousing;
