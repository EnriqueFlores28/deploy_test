import React from "react";
import Header from "@/components/Header";
import { FaLightbulb, FaUsers, FaLeaf, FaBalanceScale, FaCheckCircle } from "react-icons/fa";

const MissionVisionValues = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center p-8 mt-16">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-10">Mission, Vision, and Values</h1>
        
        <section className="mb-12 text-center max-w-3xl p-6 bg-gray-100 shadow-lg rounded-lg">
          <FaLightbulb className="text-yellow-500 text-5xl mb-4 mx-auto" />
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Our mission is to provide innovative and sustainable solutions that drive development and improve people's quality of life.
          </p>
        </section>

        <section className="mb-12 text-center max-w-3xl p-6 bg-gray-100 shadow-lg rounded-lg">
          <FaUsers className="text-blue-500 text-5xl mb-4 mx-auto" />
          <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-4 text-lg">
            We aspire to be leaders in the industry, standing out for our excellence, social responsibility, and commitment to innovation.
          </p>
        </section>

        <section className="mb-12 text-center max-w-3xl p-6 bg-gray-100 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <ul className="grid grid-cols-2 gap-6 text-gray-600 text-lg">
            <li className="flex items-center gap-3"><FaLeaf className="text-green-500 text-3xl" /> Sustainability</li>
            <li className="flex items-center gap-3"><FaLightbulb className="text-yellow-500 text-3xl" /> Innovation</li>
            <li className="flex items-center gap-3"><FaUsers className="text-blue-500 text-3xl" /> Commitment</li>
            <li className="flex items-center gap-3"><FaBalanceScale className="text-gray-700 text-3xl" /> Ethics and Transparency</li>
            <li className="flex items-center gap-3"><FaCheckCircle className="text-green-700 text-3xl" /> Quality</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MissionVisionValues;
