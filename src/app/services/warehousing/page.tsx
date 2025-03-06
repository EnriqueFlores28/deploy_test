"use client";

import React from "react";
import Carousel from "@/components/ui/carousel";

const slides = [
  { src: "/final/Slide16.JPG", caption: "Casapia Warehouse 1" },
  { src: "/final/Slide20.JPG", caption: "Casapia Olivos Warehouse 2" },
  { src: "/final/Slide31.JPG", caption: "Casapia Warehouse 3" }
];

const builds = [
  {
    name: "Casapia Warehouse 1",
    cdate: "2010",
    location: "Tijuana, México",
    area_m2: "13,112.12",
    area_ft2: "141,137.69",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2117.145440343131!2d-116.8095213!3d32.4621853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d93f1391c8b4b9%3A0x50f5c75d0c6e95de!2sAlmac%C3%A9n%20Casapia!5e1!3m2!1ses-419!2smx!4v1740165106391!5m2!1ses-419!2smx"
  },
  {
    name: "Casapia Olivos Warehouse 2",
    cdate: "2021",
    location: "Tijuana, México",
    area_m2: "18,883.17",
    area_ft2: "203,256.76",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1722.6980745057715!2d-116.85706165504568!3d32.4594776773662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDI3JzM0LjMiTiAxMTbCsDUxJzIyLjciVw!5e1!3m2!1ses-419!2smx!4v1740441158969!5m2!1ses-419!2smx"
  },
  {
    name: "Casapia Warehouse 3",
    cdate: "2024",
    location: "Tijuana, México",
    area_m2: "8,877.71",
    area_ft2: "95,558.88",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3445.310684655698!2d-116.80932200000001!3d32.461712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDI3JzQyLjIiTiAxMTbCsDQ4JzMzLjYiVw!5e1!3m2!1ses-419!2smx!4v1740441577842!5m2!1ses-419!2smx"
  }
];

const Warehousing = () => {
  return (
    <div className="bg-secondary min-h-screen pt-24 py-16 px-6 text-center">
      <h1 className="text-5xl mb-6 text-black">Warehousing</h1>
      <div>
        <Carousel slides={slides} />
      </div>
      <div className="max-w-4xl mx-auto bg-gray-100 mb-10 p-8 rounded-xl shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed">
          Our Warehousing division offers industrial storage solutions through the rental of high-quality warehouses. Designed to meet the needs of the manufacturing and logistics sectors, our facilities provide secure, strategic, and flexible spaces that optimize operations and inventory management.
        </p>
      </div>

      <div className="max-w-5xl mx-auto overflow-x-auto hidden md:block">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Available Warehousing Solutions</h2>
        <p className="text-lg text-gray-600 mb-6">
          Here you will find all the warehouses we offer to support your manufacturing and logistics needs.
        </p>
        <table className="w-full min-w-[700px] border-collapse border border-blue-500 shadow-lg">
          <thead className="bg-blue-600 text-white text-lg">
            <tr>
              <th className="border border-blue-500 px-4 py-3">Name</th>
              <th className="border border-blue-500 px-4 py-3">Build Date</th>
              <th className="border border-blue-500 px-4 py-3">Location</th>
              <th className="border border-blue-500 px-4 py-3">Area (m²)</th>
              <th className="border border-blue-500 px-4 py-3">Area (ft²)</th>
            </tr>
          </thead>
          <tbody>
            {builds.map((builds, index) => (
              <tr key={index} className="bg-blue-100 hover:bg-blue-200 text-black">
                <td className="border border-blue-500 px-4 py-3 font-medium">{builds.name}</td>
                <td className="border border-blue-500 px-4 py-3">{builds.cdate}</td>
                <td className="border border-blue-500 px-4 py-3">{builds.location}</td>
                <td className="border border-blue-500 px-4 py-3">{builds.area_m2} m²</td>
                <td className="border border-blue-500 px-4 py-3">{builds.area_ft2} ft²</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        <h2 className="text-3xl font-semibold text-black mb-4">Our Available Warehousing Solutions</h2>
        <p className="text-lg text-gray-600 mb-6">Here you will find all the warehouses we offer to support your manufacturing and logistics needs.</p>
        {builds.map((builds, index) => (
          <div key={index} className="bg-blue-100 p-4 mb-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-black">{builds.name}</h3>
            <p className="text-gray-700">Build Date: {builds.cdate}</p>
            <p className="text-gray-700">Location: {builds.location}</p>
            <p className="text-gray-700">Area: {builds.area_m2} m² / {builds.area_ft2} ft²</p>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-black mb-4">Warehouse Locations</h2>
        <p className="text-lg text-gray-600 mb-6">Below are the locations of our warehouses. Click on the maps to explore.</p>
        {builds.map((build, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-black">{build.name}</h3>
            <p className="text-gray-700 mb-2">{build.location}</p>
            <iframe
              src={build.mapUrl}
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
