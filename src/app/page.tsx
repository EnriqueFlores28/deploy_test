"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/Petronas.avif"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay Oscuro */}
      </div>

      {/* Flecha de scroll */}
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
    <Image src={svgPath} width={64} height={64} alt={title} className="mb-2" />
    <CountUp start={0} end={number} duration={3} separator="," className="text-4xl font-bold text-gray-800" />
    <p className="text-lg text-gray-600">{title}</p>
  </div>
);

const HomeSection = () => {
  return (
    <section className="w-full min-h-screen bg-secondary text-gray-800 flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Welcome to Casapia Construction Inc.
      </h2>
      <p className="text-lg md:text-xl max-w-3xl text-center mb-12">
        Casapia has assembled a team of top-tier construction professionals, offering services across various market
        sectors. We are committed to serving our clients with confidence and technology, specializing in collaborations
        with South Korean enterprises.
      </p>

      {/* Contador listo para SVGs */}
      <p>*ejemplo*</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <Counter number={25} title="Years of Experience" svgPath="/svg/calendar.svg" />
        <Counter number={500} title="Projects Completed" svgPath="/svg/building.svg" />
        <Counter number={100} title="Clients Served" svgPath="/svg/globe.svg" />
        <Counter number={10} title="Awards Won" svgPath="/svg/award.svg" />
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
