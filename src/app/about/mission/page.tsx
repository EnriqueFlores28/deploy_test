import React from "react";
import Header from "@/components/Header";
import { FaLightbulb, FaUsers, FaLeaf, FaBalanceScale, FaStar } from "react-icons/fa";

const MissionVisionValues = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center p-6 sm:p-12 mt-16">
        <h1 className="text-5xl font-extrabold text-black mb-12 text-center">Mission, Vision & Values</h1>

        {/* Mission Section */}
        <section className="mb-12 text-center max-w-4xl p-10 bg-white shadow-lg rounded-xl">
          <FaLightbulb className="text-yellow-500 text-6xl mb-4 mx-auto" />
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            We are committed to delivering high-quality industrial buildings tailored to the needs of the Korean maquiladora industry in Tijuana.
            With 25 years of experience, we provide innovative, efficient, and sustainable construction solutions that drive the growth
            of our clients and the region’s industrial sector.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-12 text-center max-w-4xl p-10 bg-white shadow-lg rounded-xl">
          <FaUsers className="text-blue-500 text-6xl mb-4 mx-auto" />
          <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            To be the leading construction company specializing in industrial facilities for the Korean maquiladora sector in Tijuana,
            recognized for our excellence, reliability, and commitment to innovation and sustainability.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="text-center max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{
              icon: <FaStar className="text-yellow-500 text-5xl mb-3" />, 
              title: "Excellence", 
              desc: "We maintain the highest standards in every project, ensuring quality and efficiency."
            }, {
              icon: <FaBalanceScale className="text-gray-700 text-5xl mb-3" />, 
              title: "Integrity", 
              desc: "We operate with transparency, honesty, and strong ethical principles."
            }, {
              icon: <FaLightbulb className="text-yellow-500 text-5xl mb-3" />, 
              title: "Innovation", 
              desc: "We continuously seek new technologies and methods to improve our processes and results."
            }, {
              icon: <FaUsers className="text-blue-500 text-5xl mb-3" />, 
              title: "Commitment", 
              desc: "We are dedicated to exceeding our clients' expectations and fostering long-term relationships."
            }, {
              icon: <FaLeaf className="text-green-500 text-5xl mb-3" />, 
              title: "Sustainability", 
              desc: "We promote environmentally responsible practices in our construction processes."
            }].map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-2xl transition-all">
                {value.icon}
                <h3 className="font-semibold text-xl text-gray-800">{value.title}</h3>
                <p className="text-center mt-2 text-gray-600 text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionVisionValues;
