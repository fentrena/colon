import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nuestros Catálogos – Ivor Bearings Int",
  description: "Explore nuestros catálogos de rodamientos y productos de transmisión de potencia.",
};

const BASE = "https://ivorbearingsint.com/wp-content/uploads";

const catalogs = [
  { title: "Catálogo de Rodamientos", img: "/2023/04/producto-ivor-03.png" },
  { title: "Transmisión de Potencia", img: "/2023/04/producto-ivor-05.png" },
  { title: "Sellos y Retenes", img: "/2023/04/producto-ivor-06.png" },
  { title: "Herramientas y Accesorios", img: "/2023/04/producto-ivor-07.png" },
];

export default function CatalogosPage() {
  return (
    <>
      {/* HERO navy */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Explore nuestros catálogos</h1>
        </div>
      </section>

      {/* Grid de catálogos */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {catalogs.map(({ title, img }) => (
              <div
                key={title}
                className="flex flex-col rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-white"
              >
                <div className="relative aspect-[3/4] bg-gray-50">
                  <Image
                    src={`${BASE}${img}`}
                    alt={title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 border-t border-gray-100">
                  <h2 className="font-semibold text-navy text-sm mb-4 leading-snug">{title}</h2>
                  <a
                    href="/contactanos"
                    className="inline-block w-full text-center bg-navy hover:bg-navy/90 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Descargar catálogo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
