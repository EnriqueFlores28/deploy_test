"use client"; 

import { useRouter, usePathname } from "next/navigation";
import { Home } from "lucide-react";

const GoHome = () => {
  const router = useRouter();
  const pathname = usePathname(); 

  if (pathname === "/") return null; 

  const goToHome = () => {
    router.push("/"); 
  };

  return (
    <button
      onClick={goToHome}
      className="fixed bottom-24 right-6 z-50 p-3 bg-blue-700 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-xl"
    >
      <Home size={32} className="transition-transform duration-300 hover:animate-pulse" />
    </button>
  );
};

export default GoHome;
