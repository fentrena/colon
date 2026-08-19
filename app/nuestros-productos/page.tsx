import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nuestros Productos – Ivor Bearings Int",
  description: "Descubre nuestros productos premium: rodamientos y componentes de transmisión de potencia de las mejores marcas del mundo.",
};

const BASE = "https://ivorbearingsint.com/wp-content/uploads";

const categories = [
  { name: "Angular Contact Ball Bearings", img: "/2024/04/Angular-Contact-Ball-Bearings.png" },
  { name: "Cylindrical Roller Bearings", img: "/2024/04/Cylindrical-Roller-Bearings.png" },
  { name: "Deep Groove Ball Bearing", img: "/2024/04/Deep-Groove-Ball-Bearing.png" },
  { name: "Tapered Roller Bearings", img: "/2024/04/Tapered-Roller-Bearings.png" },
  { name: "Thrust Ball Bearings", img: "/2024/04/Thrust-Ball-Bearings.png" },
  { name: "Cam Followers", img: "/2024/04/Cam-followers.png" },
  { name: "Pillow Blocks", img: "/2024/04/Pillow-Block-0.png" },
  { name: "Adapter Sleeves", img: "/2024/04/Adapter-Sleeves-Wit.png" },
];

export default function ProductsPage() {
  return (
    <>
      {/* HERO con imagen de fondo */}
      <section className="relative bg-navy text-white min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src={`${BASE}/2024/04/image-57.png`}
          alt="Productos Ivor Bearings"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl w-full mx-auto px-5 sm:px-8 py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight">
            Descubre nuestros productos premium
          </h1>
        </div>
      </section>

      {/* Grid de categorías */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(({ name, img }) => (
              <div
                key={name}
                className="group relative aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50"
              >
                <Image
                  src={`${BASE}${img}`}
                  alt={name}
                  fill
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay al hover */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-navy group-hover:text-white font-semibold text-sm text-center transition-colors duration-300">
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
