import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const stats = [
  { value: "47+", label: "Años de experiencia" },
  { value: "500+", label: "Colaboradores" },
  { value: "6", label: "Países" },
  { value: "20+", label: "Marcas líderes" },
];

const categories = [
  {
    title: "Rodamientos",
    description: "Rodamientos de bolas, rodillos cilíndricos, cónicos, esféricos, agujas y axiales de las mejores marcas del mundo.",
  },
  {
    title: "Transmisión de Potencia",
    description: "Correas, cadenas, sprockets, acoplamientos y poleas para cualquier aplicación industrial.",
  },
  {
    title: "Sellos y Retenes",
    description: "Sellos de aceite, retenes métricos e imperiales y O-rings para todo tipo de equipos.",
  },
  {
    title: "Chumaceras",
    description: "Chumaceras de pie, flange y cartridge con rodamientos incorporados para montaje rápido.",
  },
  {
    title: "Herramientas de Montaje",
    description: "Extractores, calentadores por inducción y herramientas especializadas para instalación segura.",
  },
  {
    title: "Lubricación",
    description: "Grasas y aceites industriales de alta performance para rodamientos, cadenas y engranajes.",
  },
];

const countries = ["Venezuela", "Miami, EE. UU.", "Panamá", "Costa Rica", "Rep. Dominicana"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder label="Hero principal" ratio="" className="w-full h-full rounded-none opacity-30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <p className="text-primary-200 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Ivor Bearings International
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tight">
            The Perfect<br />Balance
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-xl mb-10 leading-relaxed">
            Líderes en la distribución de rodamientos y productos de transmisión de potencia
            de las mejores marcas del mundo. Más de 47 años de experiencia internacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/nuestros-productos"
              className="inline-block bg-white hover:bg-primary-100 text-primary-900 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Ver Productos
            </Link>
            <Link
              href="/contactanos"
              className="inline-block border border-primary-400 hover:border-white text-primary-200 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-black text-white mb-1">{value}</p>
              <p className="text-sm text-primary-300 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nosotros / Our Legacy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary-600 uppercase tracking-widest text-xs font-bold mb-4">Nuestra Historia</p>
            <h2 className="text-4xl font-black text-primary-900 mb-6 leading-tight">
              Más de 47 años construyendo el equilibrio perfecto
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Fundada en 1976 en Venezuela bajo el nombre Rodamientos Rovi, nuestra organización
              nació de una visión emprendedora y del compromiso de servir las necesidades de la
              industria con productos de calidad y un trato cercano.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Lo que comenzó como un proyecto local evolucionó hasta convertirse en una empresa con
              alcance regional, siempre guiada por los mismos valores que inspiraron a su fundador:
              honestidad, compromiso y confianza.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Hoy operamos a través de nuestras entidades clave, IVOR Bearings Inc. e IVOR Bearings Int.,
              con presencia en 6 países y más de 500 colaboradores de diferentes nacionalidades.
            </p>
            <div className="flex flex-wrap gap-2">
              {countries.map((c) => (
                <span key={c} className="bg-primary-50 text-primary-700 border border-primary-100 text-sm px-3 py-1 rounded-full font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <ImagePlaceholder label="Foto corporativa / instalaciones" ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-20 px-4 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary-600 uppercase tracking-widest text-xs font-bold mb-3">Nuestros Productos</p>
            <h2 className="text-4xl font-black text-primary-900 mb-4">
              Soluciones para cada aplicación industrial
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ofrecemos una gama completa de rodamientos y productos de transmisión de potencia
              para elevar el rendimiento de las máquinas de nuestros clientes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-primary-100 overflow-hidden hover:shadow-md hover:border-primary-300 transition-all group"
              >
                <ImagePlaceholder label={title} ratio="aspect-video" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary-800 mb-2 group-hover:text-primary-900 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/nuestros-productos"
              className="inline-block bg-primary-900 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      {/* Marcas strip */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-primary-600 uppercase tracking-widest text-xs font-bold mb-3">Marcas que Distribuimos</p>
          <h2 className="text-center text-2xl font-black text-primary-900 mb-10">
            Las mejores marcas del mundo
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["SKF", "FAG", "NSK", "NTN", "Timken", "INA", "IKO", "Koyo", "Gates", "Renold"].map((brand) => (
              <div
                key={brand}
                className="bg-primary-50 border border-primary-100 rounded-lg px-6 py-3 text-center min-w-[80px]"
              >
                <ImagePlaceholder label={brand} ratio="" className="w-16 h-10 mb-1 mx-auto" />
                <p className="text-primary-800 font-bold text-sm">{brand}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/marcas" className="text-primary-700 hover:text-primary-900 font-semibold text-sm hover:underline">
              Ver todas las marcas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA cotización */}
      <section className="py-20 px-4 bg-primary-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">¿Necesitas una cotización?</h2>
          <p className="text-primary-200 text-lg mb-8 leading-relaxed">
            Nuestro equipo de especialistas está listo para ayudarte a encontrar el producto
            correcto. Respondemos en menos de 24 horas hábiles.
          </p>
          <Link
            href="/contactanos"
            className="inline-block bg-white hover:bg-primary-100 text-primary-900 font-bold px-10 py-4 rounded-lg transition-colors"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </>
  );
}
