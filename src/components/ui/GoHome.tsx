"use client"; // 🔥 Necesario porque usamos hooks de React

import { useRouter, usePathname } from "next/navigation";
import { Home } from "lucide-react";

const GoHome = () => {
  const router = useRouter();
  const pathname = usePathname(); // Obtiene la ruta actual

  if (pathname === "/") return null; // No renderiza el botón en Home

  const goToHome = () => {
    router.push("/"); // 🔥 Redirige al home
  };

  return (
    <button
      onClick={goToHome}
      className="fixed bottom-24 right-6 z-50 p-3 bg-blue-700 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <Home size={32} />
    </button>
  );
};

export default GoHome;
