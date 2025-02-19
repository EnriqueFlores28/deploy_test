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

  const closeMenus = () => {
    setOpenSubMenu(null);
    setActiveMenu(null);
    setMenuOpen(false);
  };

  const headerClass = isHome && !isScrolled && !isHovered
    ? "bg-transparent text-white"
    : "bg-primary shadow-lg text-blue-600";

  const logoSrc = isHome && !isScrolled && !isHovered ? "/logow.svg" : "/logob.svg";

  if (!hydrated) return null;

  return (
    <header className={`fixed top-0 left-0 w-full p-4 z-50 ${headerClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={logoSrc}
            alt="Logo de la Empresa"
            width={80}
            height={40}
            className="transition-all duration-300"
          />
        </Link>

        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav className={`lg:flex absolute lg:relative bg-primary lg:bg-transparent w-full lg:w-auto top-16 left-0 lg:top-0 lg:left-auto shadow-lg lg:shadow-none p-4 lg:p-0 transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"}`}>
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
              <li key={menu.name} className="relative group"
                onMouseEnter={() => isDesktop && setActiveMenu(menu.name)}
                onMouseLeave={() => isDesktop && setActiveMenu(null)}
              >
                <button
                  className={`w-full px-4 py-3 hover:bg-gray-100 rounded-lg flex items-center justify-between`}
                  onClick={() => toggleSubMenu(menu.name)}
                >
                  <span className="w-full inline-flex justify-between items-center">
                    {menu.name.charAt(0).toUpperCase() + menu.name.slice(1)}
                    <HiChevronDown className={`ml-2 text-xl transition-transform ${openSubMenu === menu.name ? "rotate-180" : ""}`} />
                  </span>
                </button>

                <div
                  className={`lg:absolute lg:bg-primary lg:shadow-md lg:w-64 lg:rounded-lg lg:p-4 ease-in-out ${isDesktop ? "hidden group-hover:block" : (openSubMenu === menu.name ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible")}`}
                >
                  <ul className="lg:pl-0 pl-6 space-y-2">
                    {menu.links.map((link) => (
                      <li key={link.name} className="hover:bg-gray-100 lg:px-4 px-6 py-3 rounded-lg">
                        <Link href={link.href} className="w-full h-full inline-block" onClick={closeMenus}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li>
              <Link href="/contact" className="w-full px-4 py-3 hover:bg-gray-100 rounded-lg block text-center" onClick={closeMenus}>
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
