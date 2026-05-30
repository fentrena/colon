import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Productos – Ivor Bearings Int",
  description: "Catálogo completo de rodamientos, transmisión de potencia, sellos y componentes industriales de las mejores marcas del mundo.",
};

const products = [
  {
    category: "Rodamientos",
    description: "Nuestro equipo de especialistas estudia constantemente el mercado para ampliar la gama de productos y ofrecer nuevos servicios.",
    items: [
      { name: "Rodamientos de Bolas de Ranura Profunda", desc: "Serie 6000, 6200, 6300. Alta velocidad con cargas radiales y axiales moderadas." },
      { name: "Rodamientos Angulares de Contacto", desc: "Para cargas axiales y radiales combinadas. Montaje en X o en O." },
      { name: "Rodamientos de Rodillos Cilíndricos", desc: "Alta capacidad de carga radial. Ideales para altas velocidades y cargas pesadas." },
      { name: "Rodamientos Cónicos de Rodillos", desc: "Para cargas axiales y radiales combinadas. Cajas de engranajes y diferenciales." },
      { name: "Rodamientos Esféricos de Rodillos", desc: "Autoalineantes. Para cargas pesadas y condiciones difíciles de operación." },
      { name: "Rodamientos de Agujas", desc: "Perfil delgado con alta capacidad de carga radial. Para espacios reducidos." },
      { name: "Rodamientos de Empuje (Axiales)", desc: "Diseñados exclusivamente para cargas axiales en una o ambas direcciones." },
      { name: "Rodamientos de Doble Hilera", desc: "Dos filas de elementos rodantes para mayor capacidad de carga en espacio compacto." },
    ],
  },
  {
    category: "Transmisión de Potencia",
    description: "Componentes de transmisión para elevar el rendimiento de las máquinas y garantizar la continuidad operativa.",
    items: [
      { name: "Correas en V Clásicas", desc: "Perfiles A, B, C, D, E. Para aplicaciones industriales generales." },
      { name: "Correas Sincrónicas (Dentadas)", desc: "Transmisión sin deslizamiento para aplicaciones de alta precisión." },
      { name: "Correas Poli-V (Ribbed)", desc: "Alta flexibilidad para pequeños diámetros de polea y altas velocidades." },
      { name: "Cadenas de Rodillos", desc: "Simple, doble y triple paso. Normas ANSI e ISO." },
      { name: "Cadenas de Conveyor", desc: "Cadenas de placa, paletas y tablillas para sistemas transportadores." },
      { name: "Sprockets y Piñones", desc: "Compatibles con cadenas ANSI e ISO. Acero, hierro y plástico de ingeniería." },
      { name: "Acoplamientos Flexibles", desc: "Absorben choques y vibraciones. Alta durabilidad en aplicaciones pesadas." },
      { name: "Poleas y Chumaceras", desc: "Chumaceras de pie, flange y cartridge. Poleas para correas en V y sincrónicas." },
    ],
  },
  {
    category: "Sellos y Retenes",
    description: "Sellos industriales para proteger rodamientos y equipos contra la contaminación y pérdida de lubricante.",
    items: [
      { name: "Sellos de Aceite Métricos", desc: "Disponibles en todas las dimensiones DIN 3760 e ISO 6194." },
      { name: "Sellos de Aceite Imperiales", desc: "Estándar imperial para equipos norteamericanos." },
      { name: "Sellos de Laberinto", desc: "Protección sin contacto para altas velocidades y temperaturas extremas." },
      { name: "O-Rings y Juntas", desc: "NBR, FKM, EPDM, Silicona. Para hidráulica y neumática." },
    ],
  },
  {
    category: "Herramientas y Lubricación",
    description: "Herramientas especializadas y lubricantes técnicos para la correcta instalación y mantenimiento de componentes.",
    items: [
      { name: "Extractores de Rodamientos", desc: "Mecánicos e hidráulicos para desmontaje seguro sin daños al componente." },
      { name: "Calentadores por Inducción", desc: "Montaje rápido y seguro. Evita daños por calor excesivo o golpes." },
      { name: "Grasas para Rodamientos", desc: "Alta performance: temperaturas extremas, alta velocidad, ambientes agresivos." },
      { name: "Aceites Industriales", desc: "Para engranajes, compresores, cadenas y sistemas hidráulicos." },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder label="Hero productos" ratio="" className="w-full h-full rounded-none opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <p className="text-primary-200 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Nuestros Productos
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-none">
            Soluciones para cada<br />aplicación industrial
          </h1>
          <p className="text-lg text-primary-100 max-w-xl leading-relaxed">
            Distribuimos una gama completa de rodamientos y productos de transmisión de potencia
            para elevar el rendimiento de las máquinas de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Products */}
      <div id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {products.map(({ category, description, items }) => (
            <section key={category}>
              <div className="mb-8 pb-4 border-b-2 border-primary-800">
                <h2 className="text-3xl font-black text-primary-900 mb-2">{category}</h2>
                <p className="text-gray-500">{description}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map(({ name, desc }) => (
                  <div
                    key={name}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-primary-300 transition-all"
                  >
                    <ImagePlaceholder label={name} ratio="aspect-[4/3]" />
                    <div className="p-4">
                      <h3 className="font-bold text-primary-800 mb-1 text-sm leading-snug">{name}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary-900 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-black mb-3">¿No encuentras lo que buscas?</h2>
          <p className="text-primary-200 mb-8 max-w-lg mx-auto">
            Contáctanos con la referencia o especificaciones del componente que necesitas.
            Buscamos en todo el mundo para encontrarte la mejor solución.
          </p>
          <Link
            href="/contactanos"
            className="inline-block bg-white hover:bg-primary-100 text-primary-900 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Solicitar Producto Específico
          </Link>
        </div>
      </div>
    </>
  );
}
