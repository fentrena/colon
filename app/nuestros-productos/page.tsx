import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestros Productos – IVOR Bearings International",
  description: "Catálogo completo de rodamientos, sellos, correas, cadenas y componentes industriales.",
};

const products = [
  {
    category: "Rodamientos",
    emoji: "⚙️",
    items: [
      { name: "Rodamientos de Bolas de Ranura Profunda", desc: "Serie 6000, 6200, 6300. Para aplicaciones de alta velocidad con cargas radiales y axiales moderadas." },
      { name: "Rodamientos de Rodillos Cilíndricos", desc: "Alta capacidad de carga radial. Ideales para aplicaciones con altas velocidades y cargas pesadas." },
      { name: "Rodamientos Cónicos", desc: "Diseñados para soportar cargas axiales y radiales combinadas. Aplicaciones en cajas de engranajes y diferenciales." },
      { name: "Rodamientos Esféricos de Rodillos", desc: "Autoalineantes, compensan desalineación del eje. Para cargas pesadas y condiciones difíciles." },
      { name: "Rodamientos de Agujas", desc: "Perfil delgado con alta capacidad de carga radial. Para espacios reducidos." },
      { name: "Rodamientos Axiales", desc: "Diseñados exclusivamente para cargas axiales en una o ambas direcciones." },
    ],
  },
  {
    category: "Sellos y Retenes",
    emoji: "🔩",
    items: [
      { name: "Sellos de Aceite Métricos", desc: "Disponibles en todas las dimensiones estándar DIN 3760 y ISO 6194." },
      { name: "Sellos de Aceite Imperiales", desc: "Estándar imperial para equipos norteamericanos y aplicaciones especiales." },
      { name: "Sellos de Laberinto", desc: "Protección sin contacto para altas velocidades y temperaturas extremas." },
      { name: "O-Rings y Juntas", desc: "Materiales: NBR, FKM, EPDM, Silicona. Para aplicaciones hidráulicas y neumáticas." },
    ],
  },
  {
    category: "Transmisión de Potencia",
    emoji: "🔗",
    items: [
      { name: "Cadenas de Rodillos", desc: "Simple, doble y triple paso. Norma ANSI e ISO. Para transmisión de potencia industrial." },
      { name: "Cadenas de Conveyor", desc: "Cadenas de placa, de paletas y de tablillas para sistemas transportadores." },
      { name: "Sprockets y Piñones", desc: "Compatibles con cadenas ANSI e ISO. En acero, hierro y plástico de ingeniería." },
      { name: "Correas en V Clásicas", desc: "Perfiles A, B, C, D, E. Para aplicaciones industriales generales." },
      { name: "Correas Sincrónicas (Dentadas)", desc: "Transmisión sin deslizamiento para aplicaciones de precisión." },
      { name: "Correas Poli-V (Ribbed)", desc: "Alta flexibilidad para pequeños diámetros de polea y altas velocidades." },
    ],
  },
  {
    category: "Acoplamientos y Transmisión",
    emoji: "🔧",
    items: [
      { name: "Acoplamientos de Grilla (Grid)", desc: "Absorben choques y vibraciones. Alta durabilidad en aplicaciones industriales pesadas." },
      { name: "Acoplamientos de Disco", desc: "Transmisión de alta precisión sin mantenimiento. Para bombas y compresores." },
      { name: "Acoplamientos de Mandíbula (Jaw)", desc: "Amortiguación de vibraciones con insertos elastoméricos intercambiables." },
      { name: "Poleas y Chumaceras", desc: "Chumaceras de pie, flange y cartridge. Poleas para correas en V y sincrónicas." },
    ],
  },
  {
    category: "Herramientas y Lubricación",
    emoji: "🛠️",
    items: [
      { name: "Extractores de Rodamientos", desc: "Extractores mecánicos e hidráulicos para desmontaje seguro sin daños." },
      { name: "Calentadores por Inducción", desc: "Montaje rápido y seguro de rodamientos. Evita daños por calor excesivo." },
      { name: "Grasas para Rodamientos", desc: "Grasas de alta performance para temperaturas extremas, alta velocidad y ambientes agresivos." },
      { name: "Lubricantes Industriales", desc: "Aceites y grasas para engranajes, compresores, cadenas y sistemas hidráulicos." },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Nuestros Productos</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Distribuimos un amplio catálogo de componentes industriales de las marcas líderes del
          mercado. Todos nuestros productos son 100% originales con garantía de fabricante.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {products.map(({ category, emoji, items }) => (
          <section key={category}>
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-primary-700">
              <span className="text-3xl">{emoji}</span>
              <h2 className="text-2xl font-bold text-primary-800">{category}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map(({ name, desc }) => (
                <div
                  key={name}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-primary-400 transition-all"
                >
                  <h3 className="font-semibold text-primary-800 mb-2">{name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 bg-primary-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">¿No encuentras lo que buscas?</h2>
        <p className="text-gray-300 mb-6">
          Contáctanos con la referencia o especificaciones del componente que necesitas.
          Buscamos en todo el mundo para encontrarte la mejor solución.
        </p>
        <Link
          href="/contactanos"
          className="inline-block bg-white hover:bg-primary-100 text-primary-900 font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Solicitar Producto Específico
        </Link>
      </div>
    </div>
  );
}
