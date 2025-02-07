import Image from "next/image";
import { FaArrowDown } from "react-icons/fa"; // Ícono de flecha

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

      {/* Contenido sobre la imagen */}
      {/* <div className="relative text-center text-white z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a Casapia</h2>
        <p className="text-lg md:text-xl mb-6">Construyendo el futuro con innovación y compromiso.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
          Conoce más
        </button>
      </div> */}

      {/* Flecha de scroll */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <FaArrowDown className="text-white text-3xl animate-bounce" />
      </div>
    </section>
  );
};

const HomeSection = () => {
  return (
    <section className="w-full min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Casapia Construction Inc.</h2>
      <p className="text-lg md:text-xl max-w-3xl text-center">
      We are delighted to introduce our company. Casapia has assembled a team of top-tier construction professionals, 
      offering services across various market sectors: office, retail, residential, hotel, educational, medical, special use, 
      parking, housing, industrial, and renovation projects for both public and private sectors. 
      We are committed to serving our clients with confidence and technology. 
      Additionally, we specialize in collaborating with South Korean enterprises, ensuring tailored solutions that meet their unique needs.
      </p>
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