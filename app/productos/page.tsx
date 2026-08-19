import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Productos – Ivor Bearings Int",
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
      <PageHero title="Descubre nuestros productos premium" />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(({ name, img }) => (
              <div
                key={name}
                className="flex flex-col rounded-xl overflow-hidden bg-[#EBF0F0] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={`${BASE}${img}`}
                    alt={name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="px-4 py-5 border-t border-white/60">
                  <p className="text-navy font-semibold text-sm text-center">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
