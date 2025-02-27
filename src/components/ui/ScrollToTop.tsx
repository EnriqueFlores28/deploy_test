"use client"; 

import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 bg-blue-700 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:shadow-xl${
        isVisible ? " opacity-100" : " opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUpCircle size={32} className="transition-transform duration-300 hover:animate-pulse" />
    </button>
  );
};

export default ScrollToTop;
