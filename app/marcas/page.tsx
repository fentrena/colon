import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Marcas – Ivor Bearings Int",
  description: "Distribuidores autorizados de SKF, FAG, NSK, NTN, Timken, INA, IKO, Koyo, Gates y más marcas líderes en rodamientos y transmisión de potencia.",
};

const brands = [
  {
    name: "SKF",
    country: "Suecia",
    founded: "1907",
    specialty: "Rodamientos, sellos, sistemas de lubricación y mecatrónica",
    description: "Líder mundial en rodamientos con más de 100 años de innovación. SKF ofrece la gama más completa de rodamientos, sellos, lubricantes y sistemas de lubricación del mercado.",
    categories: ["Rodamientos de bolas", "Rodamientos de rodillos", "Sellos", "Lubricación", "Herramientas"],
  },
  {
    name: "FAG",
    country: "Alemania",
    founded: "1883",
    specialty: "Rodamientos de precisión y movimiento lineal (Schaeffler Group)",
    description: "Parte del Grupo Schaeffler, FAG es sinónimo de ingeniería alemana de precisión. Sus rodamientos son la elección preferida en industrias exigentes como automotriz, aeroespacial y ferroviaria.",
    categories: ["Rodamientos de precisión", "Movimiento lineal", "INA", "Sistemas de rodamientos"],
  },
  {
    name: "NSK",
    country: "Japón",
    founded: "1916",
    specialty: "Rodamientos de alta velocidad y precisión",
    description: "Primer fabricante de rodamientos de Japón. Reconocidos por su alta calidad en aplicaciones de máquinas herramienta, husillos y sectores de alta precisión.",
    categories: ["Rodamientos de bolas", "Rodamientos angulares", "Husillos de bolas", "Guías lineales"],
  },
  {
    name: "NTN",
    country: "Japón",
    founded: "1918",
    specialty: "Rodamientos para aplicaciones automotrices e industriales",
    description: "Uno de los mayores fabricantes de rodamientos del mundo. Especialistas en el sector automotriz, agricultura, minería e industria pesada.",
    categories: ["Rodamientos de bolas", "Rodamientos de rodillos", "Juntas homocinéticas", "Agujas"],
  },
  {
    name: "Timken",
    country: "EE. UU.",
    founded: "1899",
    specialty: "Rodamientos cónicos y acero especial",
    description: "Inventores del rodamiento cónico de rodillos. Líder indiscutible en esta categoría, ampliamente utilizados en minería, construcción y transporte pesado.",
    categories: ["Rodamientos cónicos", "Rodamientos esféricos", "Acero especial", "Sellos industriales"],
  },
  {
    name: "INA",
    country: "Alemania",
    founded: "1946",
    specialty: "Rodamientos de agujas y elementos de movimiento lineal (Schaeffler Group)",
    description: "INA (Schaeffler) es el especialista en rodamientos de agujas, seguidores de leva y guías lineales. Sus productos compactos son ideales donde el espacio es crítico.",
    categories: ["Rodamientos de agujas", "Seguidores de leva", "Movimiento lineal", "Rodamientos especiales"],
  },
  {
    name: "IKO",
    country: "Japón",
    founded: "1947",
    specialty: "Rodamientos de agujas y movimiento lineal de precisión",
    description: "Especialista mundial en rodamientos de agujas y sistemas de movimiento lineal. Sus productos compactos ofrecen alta capacidad de carga en espacios reducidos.",
    categories: ["Rodamientos de agujas", "Seguidores de leva", "Guías lineales", "Husillos de bolas"],
  },
  {
    name: "Koyo",
    country: "Japón",
    founded: "1921",
    specialty: "Rodamientos para automoción e industria general (JTEKT)",
    description: "Parte del grupo JTEKT, reconocidos por sus rodamientos de alta calidad para el sector automotriz y la industria general. Amplia gama para aplicaciones estándar y especiales.",
    categories: ["Rodamientos de bolas", "Rodamientos cónicos", "Rodillos cilíndricos"],
  },
  {
    name: "Gates",
    country: "EE. UU.",
    founded: "1911",
    specialty: "Correas de transmisión y mangueras industriales",
    description: "Referente mundial en correas de transmisión de potencia. Sus correas en V, sincrónicas y Poly-V son estándar en las aplicaciones industriales más exigentes.",
    categories: ["Correas en V", "Correas sincrónicas", "Correas Poly-V", "Mangueras hidráulicas"],
  },
  {
    name: "Renold",
    country: "Reino Unido",
    founded: "1879",
    specialty: "Cadenas de transmisión de potencia",
    description: "Uno de los fabricantes de cadenas más antiguos y reconocidos del mundo. Cadenas de transmisión para aplicaciones industriales, agrícolas y de conveyor.",
    categories: ["Cadenas de rodillos", "Cadenas de conveyor", "Cadenas silenciosas", "Sprockets"],
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder label="Hero marcas" ratio="" className="w-full h-full rounded-none opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <p className="text-primary-200 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Nuestras Marcas
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-none">
            Las mejores marcas<br />del mundo
          </h1>
          <p className="text-lg text-primary-100 max-w-xl leading-relaxed">
            Somos distribuidores autorizados de los fabricantes líderes en rodamientos y
            transmisión de potencia a nivel mundial. Garantizamos autenticidad y respaldo de
            fábrica en cada producto.
          </p>
        </div>
      </section>

      {/* Brands grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {brands.map(({ name, country, founded, specialty, description, categories }) => (
            <div
              key={name}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 p-6 border-b border-gray-50">
                <div className="w-20 h-16 shrink-0">
                  <ImagePlaceholder label={name} ratio="aspect-video" className="w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-black text-primary-900">{name}</h2>
                  <p className="text-primary-600 text-sm font-medium leading-snug">{specialty}</p>
                </div>
                <div className="text-right text-xs text-gray-400 shrink-0">
                  <p className="font-semibold">{country}</p>
                  <p>Desde {founded}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span key={cat} className="bg-primary-50 text-primary-700 text-xs px-2.5 py-1 rounded-full border border-primary-100 font-medium">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary-900 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-black mb-3">¿Buscas una marca que no está en la lista?</h2>
          <p className="text-primary-200 mb-8">
            Tenemos acceso a cientos de fabricantes a nivel mundial. Consúltanos.
          </p>
          <Link
            href="/contactanos"
            className="inline-block bg-white hover:bg-primary-100 text-primary-900 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Consultar Disponibilidad
          </Link>
        </div>
      </div>
    </>
  );
}
