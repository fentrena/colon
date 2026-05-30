import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marcas – IVOR Bearings International",
  description: "Distribuidores autorizados de SKF, FAG, NSK, NTN, Timken, INA, IKO, Koyo y más marcas líderes en rodamientos y componentes industriales.",
};

const brands = [
  {
    name: "SKF",
    country: "Suecia",
    founded: "1907",
    specialty: "Rodamientos, sellos, sistemas de lubricación y mecatrónica",
    description:
      "Líder mundial en rodamientos con más de 100 años de innovación. SKF ofrece la gama más completa de rodamientos, sellos, lubricantes y sistemas de lubricación del mercado.",
    categories: ["Rodamientos de bolas", "Rodamientos de rodillos", "Sellos", "Lubricación", "Herramientas"],
  },
  {
    name: "FAG (Schaeffler)",
    country: "Alemania",
    founded: "1883",
    specialty: "Rodamientos de precisión y componentes de movimiento lineal",
    description:
      "Parte del Grupo Schaeffler, FAG es sinónimo de ingeniería alemana de precisión. Sus rodamientos son la elección preferida en industrias exigentes como automotriz, aeroespacial y ferroviaria.",
    categories: ["Rodamientos de precisión", "Movimiento lineal", "Sistemas de rodamientos", "INA"],
  },
  {
    name: "NSK",
    country: "Japón",
    founded: "1916",
    specialty: "Rodamientos de alta velocidad y precisión",
    description:
      "NSK fue el primer fabricante de rodamientos en Japón. Reconocidos por su alta calidad y durabilidad en aplicaciones de máquinas herramienta, husillos y sectores de alta precisión.",
    categories: ["Rodamientos de bolas", "Rodamientos angulares", "Husillos de bolas", "Guías lineales"],
  },
  {
    name: "NTN",
    country: "Japón",
    founded: "1918",
    specialty: "Rodamientos para aplicaciones automotrices e industriales",
    description:
      "NTN es uno de los mayores fabricantes de rodamientos del mundo. Especialistas en rodamientos para el sector automotriz, agricultura, minería e industria pesada.",
    categories: ["Rodamientos de bolas", "Rodamientos de rodillos", "Juntas homocinéticas", "Rodamientos de agujas"],
  },
  {
    name: "Timken",
    country: "USA",
    founded: "1899",
    specialty: "Rodamientos cónicos y acero especial",
    description:
      "Timken inventó el rodamiento cónico de rodillos y sigue siendo el líder indiscutible en esta categoría. Sus rodamientos son ampliamente utilizados en minería, construcción y transporte pesado.",
    categories: ["Rodamientos cónicos", "Rodamientos esféricos", "Acero especial", "Sellos industriales"],
  },
  {
    name: "IKO",
    country: "Japón",
    founded: "1947",
    specialty: "Rodamientos de agujas y movimiento lineal de precisión",
    description:
      "IKO es el especialista mundial en rodamientos de agujas y sistemas de movimiento lineal. Sus productos compactos son ideales para espacios reducidos donde se requiere alta capacidad de carga.",
    categories: ["Rodamientos de agujas", "Seguidores de leva", "Guías lineales", "Husillos de bolas"],
  },
  {
    name: "Koyo (JTEKT)",
    country: "Japón",
    founded: "1921",
    specialty: "Rodamientos para automoción e industria general",
    description:
      "Koyo, parte del grupo JTEKT, es reconocida por sus rodamientos de alta calidad para el sector automotriz y la industria general. Amplia gama de soluciones para aplicaciones estándar y especiales.",
    categories: ["Rodamientos de bolas", "Rodamientos cónicos", "Rodamientos de rodillos cilíndricos"],
  },
  {
    name: "Dodge (ABB)",
    country: "USA",
    founded: "1878",
    specialty: "Chumaceras, acoplamientos y reductores",
    description:
      "Dodge es líder en chumaceras pillow block, acoplamientos de potencia y reductores de velocidad. Sus productos son estándar en la industria norteamericana.",
    categories: ["Chumaceras", "Acoplamientos", "Reductores", "Poleas"],
  },
  {
    name: "Gates",
    country: "USA",
    founded: "1911",
    specialty: "Correas de transmisión y mangueras industriales",
    description:
      "Gates es el referente mundial en correas de transmisión de potencia. Sus correas en V, sincrónicas y Poly-V son utilizadas en las aplicaciones industriales más exigentes.",
    categories: ["Correas en V", "Correas sincrónicas", "Correas Poly-V", "Mangueras hidráulicas"],
  },
  {
    name: "Renold",
    country: "Reino Unido",
    founded: "1879",
    specialty: "Cadenas de transmisión de potencia",
    description:
      "Renold es uno de los fabricantes de cadenas más antiguos y reconocidos del mundo. Cadenas de transmisión para aplicaciones industriales, agrícolas y de conveyor.",
    categories: ["Cadenas de rodillos", "Cadenas de conveyor", "Cadenas silenciosas", "Sprockets"],
  },
];

export default function BrandsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Marcas que Distribuimos</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Somos distribuidores autorizados de las marcas líderes en rodamientos y componentes
          industriales a nivel mundial. Garantizamos autenticidad y respaldo de fábrica en cada producto.
        </p>
      </div>

      {/* Brands grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {brands.map(({ name, country, founded, specialty, description, categories }) => (
          <div
            key={name}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-primary-100 border border-dashed border-primary-300 text-primary-400 rounded-lg">
                  <span className="text-[9px] font-medium uppercase tracking-wide">Logo</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary-800">{name}</h2>
                  <p className="text-primary-700 text-sm font-medium">{specialty}</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-400 shrink-0">
                <p>{country}</p>
                <p>Desde {founded}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full border border-primary-100"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">
          ¿Buscas una marca que no está en la lista? Tenemos acceso a cientos de fabricantes.
        </p>
        <Link
          href="/contactanos"
          className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Consultar Disponibilidad
        </Link>
      </div>
    </div>
  );
}
