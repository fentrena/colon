import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Marcas – Ivor Bearings Int",
  description: "Descubra nuestras marcas: distribuidores autorizados de los fabricantes líderes en rodamientos y transmisión de potencia.",
};

const BASE = "https://ivorbearingsint.com/wp-content/uploads";

const brands = [
  "abb",
  "allied",
  "ami",
  "aurora",
  "bandor",
  "hitachi",
  "kfb",
  "koyo",
  "lesson",
  "lovejoy",
  "master",
  "rbc",
  "regina",
  "renolds",
  "rex",
  "thk",
];

export default function BrandsPage() {
  return (
    <>
      <PageHero
        title="Descubra nuestras marcas"
        subtitle="Nuestra trayectoria nos ha permitido establecer las mejores relaciones comerciales con los principales proveedores alrededor del mundo."
      />

      {/* Grid de marcas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl p-8 h-32 hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`${BASE}/2024/11/${brand}.png`}
                    alt={`Marca ${brand}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
