import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Blog – IVOR Bearings International",
  description: "Artículos técnicos, noticias y guías sobre rodamientos y mantenimiento industrial.",
};

const placeholderPosts = [
  {
    title: "Cómo seleccionar el rodamiento correcto para tu aplicación",
    excerpt:
      "La selección del rodamiento adecuado depende de múltiples factores: tipo de carga, velocidad, temperatura de operación y condiciones ambientales. En esta guía te explicamos paso a paso el proceso de selección.",
    category: "Guía Técnica",
    date: "Próximamente",
    readTime: "8 min",
  },
  {
    title: "Diferencias entre rodamientos SKF, FAG y NSK: ¿Cuál elegir?",
    excerpt:
      "Tres de los fabricantes más reconocidos del mundo, pero con características distintas. Analizamos las fortalezas de cada marca y te ayudamos a decidir cuál se adapta mejor a tu operación.",
    category: "Comparativa",
    date: "Próximamente",
    readTime: "6 min",
  },
  {
    title: "Mantenimiento predictivo de rodamientos: análisis de vibraciones",
    excerpt:
      "El análisis de vibraciones es la herramienta más poderosa para detectar fallos incipientes en rodamientos. Aprende a interpretar los espectros de frecuencia y establecer alarmas de mantenimiento.",
    category: "Mantenimiento",
    date: "Próximamente",
    readTime: "10 min",
  },
  {
    title: "¿Por qué los rodamientos fallan prematuramente? Las 5 causas más comunes",
    excerpt:
      "El 90% de los fallos prematuros en rodamientos son prevenibles. Instalación incorrecta, lubricación inadecuada, contaminación, sobrecarga y corrosión son las causas más frecuentes.",
    category: "Mantenimiento",
    date: "Próximamente",
    readTime: "7 min",
  },
  {
    title: "Guía de lubricación para rodamientos industriales",
    excerpt:
      "La selección del lubricante correcto es crítica para la vida útil del rodamiento. Grasas vs aceites, viscosidad, aditivos y frecuencia de relubricación: todo lo que necesitas saber.",
    category: "Guía Técnica",
    date: "Próximamente",
    readTime: "9 min",
  },
  {
    title: "Rodamientos de agujas: cuándo y por qué usarlos",
    excerpt:
      "Los rodamientos de agujas ofrecen la mayor capacidad de carga radial por unidad de sección. Conoce sus aplicaciones típicas, ventajas sobre los rodamientos convencionales y cómo especificarlos.",
    category: "Guía Técnica",
    date: "Próximamente",
    readTime: "5 min",
  },
];

const categoryStyle = "bg-primary-100 text-primary-700";

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-primary-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
          Próximamente
        </span>
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Blog Técnico</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Estamos preparando artículos técnicos, guías de selección y noticias del sector industrial.
          Pronto encontrarás aquí contenido de valor para ingenieros y técnicos de mantenimiento.
        </p>
      </div>

      {/* Coming soon notice */}
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 text-center mb-10">
        <p className="text-primary-700 font-medium text-sm">
          El blog está en construcción. Los artículos se irán publicando progresivamente.
          ¿Quieres ser notificado cuando publiquemos contenido nuevo?{" "}
          <Link href="/contactanos" className="underline hover:text-primary-900">
            Suscríbete aquí
          </Link>
          .
        </p>
      </div>

      {/* Placeholder posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderPosts.map(({ title, excerpt, category, date, readTime }) => (
          <div
            key={title}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col opacity-90"
          >
            <ImagePlaceholder label="Artículo" ratio="aspect-[16/9]" />
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryStyle}`}>
                  {category}
                </span>
                <span className="text-xs text-gray-400">{readTime} lectura</span>
              </div>
              <h2 className="font-semibold text-primary-800 mb-3 leading-snug">{title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{excerpt}</p>
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">{date}</span>
                <span className="text-xs text-gray-400 italic">IVOR Bearings</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe CTA */}
      <div className="mt-12 bg-primary-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">¿Eres profesional del mantenimiento industrial?</h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
          Nuestro blog está diseñado para ingenieros y técnicos que quieren mejorar la vida útil
          de sus equipos y reducir costos de mantenimiento.
        </p>
        <Link
          href="/contactanos"
          className="inline-block bg-white hover:bg-primary-100 text-primary-900 font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Contactar al Equipo Técnico
        </Link>
      </div>
    </div>
  );
}
