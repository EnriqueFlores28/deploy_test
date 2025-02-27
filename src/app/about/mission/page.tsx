import React from "react";
import Image from "next/image";
import Header from "@/components/Header";

const MissionVisionValues = () => {
  return (
    <div 
      className="relative min-h-screen flex flex-col"
      style={{ backgroundImage: "url('/images/backgroundTest.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center p-6 sm:p-12 mt-16 relative z-10">
        <h1 className="text-5xl text-white mb-12 text-center">Mission, Vision & Values</h1>

        <section className="mb-12 text-center max-w-4xl p-10 bg-white bg-opacity-70 shadow-lg rounded-xl">
          <Image 
            src="/svg/mission.svg" 
            alt="Mission Icon" 
            width={64} 
            height={64} 
            className="mb-4 mx-auto"
            priority
          />
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            We are committed to delivering high-quality industrial buildings tailored to the needs of the Korean maquiladora industry in Tijuana.
            With 25 years of experience, we provide innovative, efficient, and sustainable construction solutions that drive the growth
            of our clients and the region’s industrial sector.
          </p>
        </section>

        <section className="mb-12 text-center max-w-4xl p-10 bg-white bg-opacity-70 shadow-lg rounded-xl">
          <Image 
            src="/svg/vision.svg" 
            alt="Vision Icon" 
            width={64} 
            height={64} 
            className="mb-4 mx-auto"
            priority
          />
          <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            To be the leading construction company specializing in industrial facilities for the Korean maquiladora sector in Tijuana,
            recognized for our excellence, reliability, and commitment to innovation and sustainability.
          </p>
        </section>

        <section className="text-center max-w-5xl">
          <h2 className="text-4xl text-white mb-10">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: "/svg/excellence.svg", title: "Excellence", desc: "We maintain the highest standards in every project, ensuring quality and efficiency." },
              { icon: "/svg/integrity.svg", title: "Integrity", desc: "We operate with transparency, honesty, and strong ethical principles." },
              { icon: "/svg/innovation.svg", title: "Innovation", desc: "We continuously seek new technologies and methods to improve our processes and results." },
              { icon: "/svg/commitment.svg", title: "Commitment", desc: "We are dedicated to exceeding our clients' expectations and fostering long-term relationships." },
              { icon: "/svg/sustainability.svg", title: "Sustainability", desc: "We promote environmentally responsible practices in our construction processes." }
            ].map((value, index) => (
              <div key={index} className="p-6 bg-white bg-opacity-70 rounded-xl shadow-md flex flex-col items-center hover:shadow-2xl transition-all">
                <Image 
                  src={value.icon} 
                  alt={`${value.title} Icon`} 
                  width={56} 
                  height={56} 
                  className="mb-3"
                />
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