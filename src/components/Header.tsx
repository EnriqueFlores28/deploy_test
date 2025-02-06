"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Previene errores de hidratación

    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  if (!hydrated) return null; // Evita errores de hidratación en SSR

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 ${
        isScrolled || isHovered ? "bg-white shadow-lg text-blue-600" : "bg-transparent text-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo de la Empresa" width={120} height={50} priority className="transition-all" />

        {/* Menú de Navegación */}
        <nav>
          <ul className="flex space-x-6 relative">
            {[
              { 
                name: "about", 
                links: [
                  { name: "Mission, Vision and Values", href: "/about/mission" },
                  { name: "CEO", href: "/about/ceo" },
                  { 
                    name: "History", 
                    sublinks: [
                      { name: "Timeline", href: "/about/history/timeline" }
                    ]
                  }
                ]
              },
              { 
                name: "services", 
                links: [
                  { name: "Construction Business", href: "/services/construction" },
                  { name: "Casapia Market", href: "/services/market" },
                  { name: "Warehouse", href: "/services/warehouse" }
                ]
              },
              { 
                name: "projects", 
                links: [
                  { name: "Gallery", href: "/projects/gallery" }
                ]
              }
            ].map((menu) => (
              <li key={menu.name} className="relative"
                onMouseEnter={() => setActiveMenu(menu.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className="px-4 py-2 transition-all hover:bg-gray-100 rounded-lg"
                >
                  {menu.name.charAt(0).toUpperCase() + menu.name.slice(1)}
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 bg-white shadow-lg w-64 rounded-lg p-4 transition-all duration-300 ${activeMenu === menu.name ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                  <ul>
                    {menu.links.map((link) => (
                      <li key={link.name} className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                        {link.sublinks ? (
                          <>
                            <span className="font-semibold">{link.name}</span>
                            <ul className="pl-4">
                              {link.sublinks.map((sublink) => (
                                <li key={sublink.name} className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                                  <Link href={sublink.href}>{sublink.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link href={link.href}>{link.name}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li>
              <Link href="/contact" className="px-4 py-2 transition-all hover:bg-gray-100 rounded-lg">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
