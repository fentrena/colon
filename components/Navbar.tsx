"use client";

import Link from "next/link";
import { useState } from "react";

// Links visibles en la barra principal (los 4 del original)
const primaryLeft = [
  { href: "/nuestros-productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
];

// Menú lateral completo (hamburguesa)
const drawerLinks = [
  { href: "/#quienes-somos", label: "Nosotros" },
  { href: "/nuestros-productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/nuestros-productos#catalogo", label: "Catálogo" },
  { href: "/preguntas-frecuentes", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contactanos", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#111111] text-white h-[72px]">
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* IZQUIERDA: hamburguesa + links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {primaryLeft.map(({ href, label }) => (
                <Link key={href} href={href} className="text-gray-200 hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTRO: wordmark */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-display text-white text-lg sm:text-2xl tracking-[0.15em] whitespace-nowrap"
          >
            IVOR BEARINGS INT
          </Link>

          {/* DERECHA: contacto */}
          <div className="flex items-center">
            <Link href="/contactanos" className="text-gray-200 hover:text-white transition-colors text-sm">
              Contacto
            </Link>
          </div>
        </div>
      </header>

      {/* Drawer lateral */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-72 max-w-[80%] bg-[#111111] text-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display tracking-widest text-sm">MENÚ</span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {drawerLinks.map(({ href, label }) => (
                <Link
                  key={href + label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-gray-200 hover:text-white hover:bg-white/5 rounded transition-colors border-b border-white/5"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
