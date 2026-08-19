import Image from "next/image";

const BASE = "https://ivorbearingsint.com/wp-content/uploads";

const brandLogos = [
  "/2024/04/1.png",
  "/2024/04/2.png",
  "/2024/04/3.png",
  "/2024/04/4.png",
  "/2024/04/8.png",
  "/2024/04/9.png",
  "/2024/04/10.png",
  "/2024/04/11.png",
  "/2024/04/13.png",
  "/2024/04/14.png",
  "/2024/04/15.png",
  "/2024/04/16.png",
  "/2024/04/17.png",
  "/2024/04/18.png",
  "/2024/04/19.png",
  "/2024/04/22.png",
  "/2024/04/23.png",
  "/2024/04/24.png",
  "/2024/04/25.png",
  "/2024/04/26.png",
  "/2024/04/27.png",
  "/2024/04/28.png",
  "/2024/04/29.png",
  "/2024/04/31.png",
  "/2024/04/32.png",
  "/2024/04/33.png",
  "/2024/05/30.png",
];

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
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={`${BASE}/2024/05/Bearings-06-1.png`}
              alt="Mecánico manipulando un rodamiento"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ¿POR QUÉ ELEGIR IVOR BEARINGS? */}
      <section className="bg-navy text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen a la izquierda */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-1">
            <Image
              src={`${BASE}/2024/05/Why-Choose-Ivor-Bearings.jpg`}
              alt="Rodamiento cónico Ivor Bearings"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
          <div className="flex w-max items-center animate-marquee">
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <div
                key={logo + i}
                className="shrink-0 px-[10px] w-[calc((100vw-40px)/3)] lg:w-[calc((100vw)/7)]"
              >
                <div className="relative h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300">
                  <Image
                    src={`${BASE}${logo}`}
                    alt="Marca distribuida por Ivor Bearings"
                    fill
                    className="object-contain"
                    sizes="200px"
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
