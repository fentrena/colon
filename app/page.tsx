import ImagePlaceholder from "@/components/ImagePlaceholder";

const brands = ["SKF", "NSK", "FAG", "Timken", "NTN", "Koyo", "INA", "IKO", "Gates", "Renold"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero text-white min-h-[calc(100vh-72px)] flex flex-col">
        <div className="flex-1 max-w-7xl w-full mx-auto px-5 sm:px-8 flex flex-col justify-center py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-10">
            Consulta nuestros
            <br />
            <span className="italic">productos</span>
          </h1>

          {/* Search pill */}
          <form className="flex items-stretch w-full max-w-xl rounded-full border border-white/70 bg-transparent overflow-hidden">
            <input
              type="text"
              placeholder="Ingresar Producto"
              className="flex-1 bg-transparent px-6 py-3 text-white placeholder-white/70 focus:outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-gray-50 text-navy font-bold italic px-6 sm:px-8 py-3 m-1 rounded-full hover:bg-white transition-colors whitespace-nowrap text-sm sm:text-base"
            >
              Buscar Stock
            </button>
          </form>
        </div>

        {/* Bottom-left helper */}
        <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 pb-10">
          <p className="text-sm text-white/80 leading-tight">
            ¿No lo encuentras?
            <br />
            Contáctanos y te ayudamos
          </p>
        </div>
      </section>

      {/* ¿QUIÉNES SOMOS? */}
      <section id="quienes-somos" className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">¿Quiénes somos?</h2>
            <p className="text-white/90 leading-relaxed mb-6 text-lg">
              Con <strong className="font-bold">50 años de experiencia</strong> en el mercado
              internacional, somos la empresa líder en distribución de las mejores marcas de{" "}
              <strong className="font-bold">rodamientos y productos de transmisión de potencia</strong>.
            </p>
            <p className="text-white/90 leading-relaxed text-lg">
              Nuestra organización fue fundada en el año 1976 en{" "}
              <strong className="font-bold">Venezuela</strong>, sobre la base fundamental de una
              excelente atención y servicio a nuestros clientes. Tenemos presencia en 6 países y
              contamos con más de 500 empleados de diferentes nacionalidades.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <ImagePlaceholder label="Mecánico manipulando rodamiento" ratio="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIR IVOR BEARINGS? */}
      <section className="bg-navy text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen a la izquierda */}
          <div className="rounded-lg overflow-hidden order-1">
            <ImagePlaceholder label="Rodamiento cónico" ratio="aspect-[4/3]" />
          </div>
          {/* Contenido a la derecha */}
          <div className="order-2">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">¿Por qué elegir Ivor Bearings?</h2>
            <div className="space-y-6 text-white/90 leading-relaxed">
              <p>
                <strong className="font-bold">Experiencia demostrada:</strong> Luego de casi cinco
                décadas en el rubro hemos logrado comprender el papel fundamental que desempeñan los
                rodamientos en la transmisión eficaz de la potencia en la maquinaria. Proporcionamos
                soluciones que mejoran el rendimiento y prolongan la longevidad de los equipos.
              </p>
              <p>
                <strong className="font-bold">Amplia gama de productos:</strong> Tanto si necesita
                rodamientos de rodillos cónicos robustos para aplicaciones exigentes, rodamientos de
                rodillos cilíndricos para operaciones de alta velocidad, o cualquier otro tipo de
                rodamiento, está en buenas manos. Nuestra selección está diseñada para satisfacer
                todas las necesidades de transmisión de potencia.
              </p>
              <p>
                <strong className="font-bold">Orientación al cliente:</strong> En Ivor Bearings, no
                sólo suministramos rodamientos; también forjamos relaciones duraderas. Entendemos sus
                necesidades específicas y ofrecemos soluciones personalizadas para su satisfacción
                garantizada. La piedra angular de nuestro negocio es garantizar fiabilidad y confianza
                ofreciéndole al cliente el mejor servicio posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTRAS MARCAS */}
      <section className="bg-[#e8ecec] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy">NUESTRAS MARCAS</h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex w-max gap-16 animate-marquee px-8">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={brand + i}
                className="shrink-0 w-32 h-16 flex items-center justify-center grayscale opacity-60"
              >
                <ImagePlaceholder label={brand} ratio="" className="w-full h-full rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
