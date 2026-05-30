"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Nosotros" },
  { href: "/nuestros-productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/nuestros-productos#catalogo", label: "Catálogo" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contactanos", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-900 shadow-md">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-full border-2 border-primary-300 flex items-center justify-center text-primary-100 font-black text-sm shrink-0">
                IV
              </div>
              <div className="leading-none">
                <span className="block text-white font-black tracking-wide text-base">IVOR BEARINGS</span>
                <span className="block text-primary-300 text-[10px] tracking-widest uppercase">International</span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {links.map(({ href, label }) => (
                <Link
                  key={href + label}
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    pathname === href
                      ? "text-white bg-primary-700"
                      : "text-primary-200 hover:text-white hover:bg-primary-800"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-primary-200 hover:text-white p-2"
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
          <div className="lg:hidden bg-primary-800 border-t border-primary-700 px-4 py-3 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href + label}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === href
                    ? "text-white bg-primary-700"
                    : "text-primary-200 hover:text-white hover:bg-primary-700"
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
