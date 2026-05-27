import Link from "next/link";

const categories = [
  {
    icon: "⚙️",
    title: "Rodamientos",
    description: "Rodamientos de bolas, rodillos, cónicos, esféricos, agujas y más.",
  },
  {
    icon: "🔩",
    title: "Sellos y Retenes",
    description: "Sellos de aceite, retenes métricos e imperiales, sellos de laberinto.",
  },
  {
    icon: "🔗",
    title: "Cadenas y Sprockets",
    description: "Cadenas de transmisión de potencia, cadenas de conveyors y sprockets.",
  },
  {
    icon: "📡",
    title: "Correas",
    description: "Correas en V, correas sincrónicas, correas planas y poli-V.",
  },
  {
    icon: "🔧",
    title: "Acoplamientos",
    description: "Acoplamientos flexibles, rígidos, de disco y de grilla.",
  },
  {
    icon: "🛠️",
    title: "Herramientas y Accesorios",
    description: "Extractores, calentadores por inducción, lubricantes especializados.",
  },
];

const brands = ["SKF", "FAG", "NSK", "NTN", "Timken", "INA", "IKO", "Koyo"];

const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "500+", label: "Marcas y referencias" },
  { value: "50+", label: "Países de distribución" },
  { value: "24/7", label: "Soporte técnico" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Distribuidores de{" "}
            <span className="text-accent-400">Rodamientos</span> y<br />
            Componentes Industriales
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Más de 20 años suministrando las mejores marcas del mundo al sector industrial.
            Calidad garantizada, entregas a tiempo y asesoría técnica especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nuestros-productos"
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ver Productos
            </Link>
            <Link
              href="/contactanos"
              className="border border-gray-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-accent-400">{value}</p>
              <p className="text-sm text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-3">Nuestros Productos</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ofrecemos una amplia gama de componentes industriales para satisfacer las necesidades
              de cualquier sector.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-accent-400 transition-all group"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/nuestros-productos"
              className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-xl font-semibold text-primary-800 mb-8">
            Marcas que Distribuimos
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <span
                key={brand}
                className="bg-white border border-gray-200 text-primary-700 font-bold text-sm px-6 py-3 rounded-lg shadow-sm"
              >
                {brand}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/marcas" className="text-accent-600 hover:underline font-medium text-sm">
              Ver todas las marcas →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              ¿Por qué elegir IVOR Bearings International?
            </h2>
            <ul className="space-y-5">
              {[
                {
                  title: "Productos 100% originales",
                  desc: "Trabajamos directamente con fabricantes y distribuidores autorizados para garantizar la autenticidad de cada componente.",
                },
                {
                  title: "Asesoría técnica especializada",
                  desc: "Nuestro equipo de ingenieros te ayuda a seleccionar el componente correcto para tu aplicación.",
                },
                {
                  title: "Amplio stock disponible",
                  desc: "Miles de referencias en inventario listas para entrega inmediata a nivel nacional e internacional.",
                },
                {
                  title: "Precios competitivos",
                  desc: "Ofrecemos las mejores condiciones comerciales del mercado sin comprometer la calidad.",
                },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 text-accent-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-primary-800">{title}</p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary-900 rounded-2xl p-8 text-white text-center">
            <div className="text-6xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold mb-3">¿Necesitas una cotización?</h3>
            <p className="text-gray-300 mb-6 text-sm">
              Contáctanos con tu lista de requerimientos y te responderemos en menos de 24 horas.
            </p>
            <Link
              href="/contactanos"
              className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
