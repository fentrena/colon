"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const BASE = "https://ivorbearingsint.com/wp-content/uploads";

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
              className="hover:opacity-80 transition-opacity"
            >
              <Image src={`${BASE}/2023/04/menu-1.png`} alt="Menú" width={26} height={26} className="w-6 h-6 object-contain" />
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {primaryLeft.map(({ href, label }) => (
                <Link key={href} href={href} className="text-gray-200 hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTRO: wordmark PNG */}
          <Link
            href="/"
            aria-label="Ivor Bearings International"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src={`${BASE}/2023/04/IVOR-Banners-Web-INT.png`}
              alt="IVOR Bearings International"
              width={330}
              height={30}
              priority
              className="h-6 sm:h-7 w-auto"
            />
          </Link>

          {/* DERECHA: idioma + contacto */}
          <div className="flex items-center gap-4">
            <button aria-label="Cambiar idioma" className="hover:opacity-80 transition-opacity">
              <Image src={`${BASE}/2024/05/traduccion-1.png`} alt="Idioma" width={22} height={22} className="w-5 h-5 object-contain" />
            </button>
            <Link href="/contactanos" className="text-gray-200 hover:text-white transition-colors text-sm">
              Contacto
            </Link>
          </div>
        </div>
      </header>

      {/* Drawer lateral */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
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
