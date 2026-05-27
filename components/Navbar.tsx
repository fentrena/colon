"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nuestros-productos", label: "Nuestros Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { href: "/blog", label: "Blog" },
  { href: "/contactanos", label: "Contáctanos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-900 shadow-lg">
      {/* Top banner */}
      <div className="w-full overflow-hidden bg-primary-900">
        <Image
          src="https://ivorbearingsint.com/wp-content/uploads/2023/04/IVOR-Banners-Web-INT-1024x90.png"
          alt="IVOR Bearings International"
          width={1024}
          height={90}
          className="w-full h-auto object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Nav */}
      <nav className="bg-primary-800 border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="https://ivorbearingsint.com/wp-content/uploads/2024/06/Ivor-Group-logo-principal-animado.png"
                alt="IVOR Group"
                width={120}
                height={48}
                className="h-10 w-auto"
                unoptimized
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    pathname === href
                      ? "text-accent-400 bg-primary-700"
                      : "text-gray-300 hover:text-accent-400 hover:bg-primary-700"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-primary-900 border-t border-primary-700 px-4 py-3 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === href
                    ? "text-accent-400 bg-primary-700"
                    : "text-gray-300 hover:text-accent-400 hover:bg-primary-700"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
