"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/Petronas.avif"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> 
      </div>

      <div className="absolute bottom-10 flex justify-center w-full">
        <FaArrowDown className="text-white text-3xl animate-bounce" />
      </div>
    </section>
  );
};

interface CounterProps {
  number: number;
  title: string;
  svgPath: string;
}

const Counter: React.FC<CounterProps> = ({ number, title, svgPath }) => (
  <div className="flex flex-col items-center text-center">
    <Image src={svgPath} width={64} height={64} alt={title} />
    <CountUp start={0} end={number} duration={3} separator="," className="text-4xl font-bold text-gray-800" />
    <p className="text-lg text-gray-600">{title}</p>
  </div>
);

const HomeSection = () => {
  return (
    <section className="w-full bg-secondary text-gray-800 flex flex-col items-center justify-center py-10 px-4 md:px-6 overflow-hidden border-0">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Welcome to Casapia Construction Inc.
      </h2>
      <p className="text-base md:text-xl max-w-3xl text-center mt-3 md:mt-4">
        Casapia has assembled a team of top-tier construction professionals, offering services across various market
        sectors. We are committed to serving our clients with confidence and technology, specializing in collaborations
        with South Korean enterprises.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-6 md:mt-8">
        <Counter number={25} title="Years of Experience" svgPath="/svg/calendar.svg" />
        <Counter number={61} title="Projects Completed" svgPath="/svg/building.svg" />
        <Counter number={14} title="Clients Served" svgPath="/svg/globe.svg" />
        <Counter number={3} title="Awards Won" svgPath="/svg/award.svg" />
      </div>

      <div className="mt-14 text-center">
        <h2 className="text-2xl md:text-4xl">Celebrating 25 Years of Excellence</h2>
        <p className="text-base md:text-xl max-w-3xl mx-auto mt-3 md:mt-4">
          For 25 years, Casapia Construction Inc. has been delivering high-quality construction projects,
          setting industry standards, and building lasting relationships. Join us as we continue our journey
          towards innovation and excellence.
        </p>
        <div className="mt-4 md:mt-6">
          <Image src="/svg/anniversary.svg" width={200} height={200} alt="Brindis" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeSection />
    </div>
  );
}
