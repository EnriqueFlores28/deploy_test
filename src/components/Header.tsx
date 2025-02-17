"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setHydrated(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const toggleSubMenu = (menuName: string) => {
    if (!isDesktop) {
      setOpenSubMenu(openSubMenu === menuName ? null : menuName);
    }
  };

  const headerClass = isHome && !isScrolled && !isHovered
    ? "bg-transparent text-white"
    : "bg-primary shadow-lg text-blue-600";

  const logoSrc = isHome && !isScrolled && !isHovered ? "/logow.svg" : "/logob.svg";

  if (!hydrated) return null;

  return (
    <header className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 ${headerClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo con enlace a Home */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={logoSrc}
            alt="Logo de la Empresa"
            width={80}
            height={40}
            className="transition-all duration-300"
          />
        </Link>

        {/* Menú para móviles */}
        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menú de Navegación */}
        <nav className={`lg:flex absolute lg:relative bg-primary lg:bg-transparent w-full lg:w-auto top-16 left-0 lg:top-0 lg:left-auto shadow-lg lg:shadow-none p-4 lg:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden lg:block"}`}>
          <ul className="lg:flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
            {[ 
              {
                name: "about",
                links: [
                  { name: "Mission, Vision and Values", href: "/about/mission" },
                  { name: "CEO", href: "/about/ceo/ceo" },
                  { name: "Timeline", href: "/about/history/timeline" }
                ]
              },
              {
                name: "services",
                links: [
                  { name: "Construction", href: "/services/construction" },
                  { name: "Market", href: "/services/market" },
                  { name: "Warehousing", href: "/services/warehousing" }
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
                onMouseEnter={() => isDesktop && setActiveMenu(menu.name)}
                onMouseLeave={() => isDesktop && setActiveMenu(null)}
              >
                <button
                  className="px-4 py-2 transition-all hover:bg-gray-100 rounded-lg flex items-center justify-between w-full lg:w-auto"
                  onClick={() => toggleSubMenu(menu.name)}
                >
                  {menu.name.charAt(0).toUpperCase() + menu.name.slice(1)}
                  <HiChevronDown className={`ml-2 text-xl transition-transform duration-200 ${openSubMenu === menu.name ? "rotate-180" : ""}`} />
                </button>

                {/* Submenú (hover en escritorio, clic en móvil) */}
                <div
                  className={`lg:absolute left-0 lg:left-auto top-full bg-white shadow-md w-full lg:w-64 rounded-lg p-4 transition-all duration-300 
                    ${isDesktop ? (activeMenu === menu.name ? "opacity-100 visible" : "opacity-0 invisible") : (openSubMenu === menu.name ? "block" : "hidden")}
                  `}
                >
                  <ul>
                    {menu.links.map((link) => (
                      <li key={link.name} className="hover:bg-gray-100 px-4 py-2 rounded-lg">
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}

            {/* Contacto */}
            <li>
              <Link href="/contact" className="px-4 py-2 transition-all hover:bg-gray-100 rounded-lg block text-center">
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
