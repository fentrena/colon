import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Blog – Ivor Bearings Int",
  description: "Artículos técnicos, guías de selección y noticias sobre rodamientos y transmisión de potencia industrial.",
};

const posts = [
  {
    title: "V-Belts vs. Timing Belts: 5 Key Factors for Choosing the Right Drive Belt",
    excerpt: "Choosing the correct belt for your power transmission application can significantly impact efficiency, maintenance costs and downtime. We break down the 5 key factors you need to consider.",
    category: "Guía Técnica",
    date: "Próximamente",
    readTime: "8 min",
  },
  {
    title: "El manual primordial para conocer las chumaceras y sus usos",
    excerpt: "Las chumaceras son uno de los componentes más versátiles en la industria. Conoce los diferentes tipos, sus aplicaciones más comunes y cómo seleccionar la correcta para tu equipo.",
    category: "Guía Técnica",
    date: "Próximamente",
    readTime: "6 min",
  },
  {
    title: "Maximizing Electric Motor Efficiency with High-Quality Bearings",
    excerpt: "The right bearing selection can reduce energy consumption and extend motor life. Learn how bearing type, lubrication and mounting affect motor efficiency in industrial applications.",
    category: "Mantenimiento",
    date: "Próximamente",
    readTime: "7 min",
  },
  {
    title: "¿Por qué los rodamientos fallan prematuramente? Las 5 causas más comunes",
    excerpt: "El 90% de los fallos prematuros en rodamientos son prevenibles. Instalación incorrecta, lubricación inadecuada, contaminación, sobrecarga y corrosión son las causas más frecuentes.",
    category: "Mantenimiento",
    date: "Próximamente",
    readTime: "7 min",
  },
  {
    title: "Cómo seleccionar el rodamiento correcto para tu aplicación",
    excerpt: "La selección depende de múltiples factores: tipo de carga, velocidad, temperatura y condiciones ambientales. En esta guía te explicamos el proceso paso a paso.",
    category: "Guía Técnica",
    date: "Próximamente",
    readTime: "9 min",
  },
  {
    title: "Guía de lubricación para rodamientos industriales",
    excerpt: "La selección del lubricante correcto es crítica para la vida útil del rodamiento. Grasas vs aceites, viscosidad, aditivos y frecuencia de relubricación: todo lo que necesitas saber.",
    category: "Mantenimiento",
    date: "Próximamente",
    readTime: "8 min",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder label="Hero blog" ratio="" className="w-full h-full rounded-none opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <p className="text-primary-200 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Blog Técnico
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-none">
            Conocimiento<br />Industrial
          </h1>
          <p className="text-lg text-primary-100 max-w-xl leading-relaxed">
            Artículos técnicos, guías de selección y noticias del sector. Contenido pensado
            para ingenieros y técnicos de mantenimiento.
          </p>
        </div>
      </section>

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 text-center mb-10">
          <p className="text-primary-700 text-sm font-medium">
            El blog está en construcción. Los artículos se publicarán progresivamente.{" "}
            <Link href="/contactanos" className="underline hover:text-primary-900 font-semibold">
              Suscríbete para recibir novedades.
            </Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ title, excerpt, category, date, readTime }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <ImagePlaceholder label="Imagen del artículo" ratio="aspect-[16/9]" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {category}
                  </span>
                  <span className="text-xs text-gray-400">{readTime} lectura</span>
                </div>
                <h2 className="font-bold text-primary-800 mb-3 leading-snug text-sm">{title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{excerpt}</p>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{date}</span>
                  <span className="text-xs text-gray-400 italic">Ivor Bearings Int</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-primary-900 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-black mb-3">¿Eres profesional del mantenimiento industrial?</h2>
          <p className="text-primary-200 mb-8 max-w-lg mx-auto">
            Nuestro blog está diseñado para ingenieros y técnicos que quieren mejorar la vida útil
            de sus equipos y reducir costos de mantenimiento.
          </p>
          <Link
            href="/contactanos"
            className="inline-block bg-white hover:bg-primary-100 text-primary-900 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Contactar al Equipo Técnico
          </Link>
        </div>
      </div>
    </>
  );
}
