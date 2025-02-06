"use client";

import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Casapia</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <span className="hover:text-gray-300 cursor-pointer">Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className="hover:text-gray-300 cursor-pointer">Acerca</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="hover:text-gray-300 cursor-pointer">Contacto</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;