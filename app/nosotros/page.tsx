import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nosotros – Ivor Bearings Int",
  description: "Moviendo el mundo desde 1976. Más de 50 años distribuyendo rodamientos y productos de transmisión de potencia.",
};

const BASE = "https://ivorbearingsint.com/wp-content/uploads";

export default function NosotrosPage() {
  return (
    <>
      {/* HERO con video */}
      <section className="relative bg-navy text-white min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${BASE}/2024/11/about.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-7xl w-full mx-auto px-5 sm:px-8 py-20">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white">
            Moviendo
            <br />
            el mundo
            <br />
            Desde 1976
          </h1>
        </div>
      </section>

      {/* ¿Quiénes somos? */}
      <section className="bg-navy text-white border-t border-white/10">
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

      {/* ¿Por qué elegir Ivor Bearings? */}
      <section className="bg-navy text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-1">
            <Image
              src={`${BASE}/2024/05/Why-Choose-Ivor-Bearings.jpg`}
              alt="Rodamiento cónico Ivor Bearings"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
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
    </>
  );
}
