"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "¿Qué tipos de rodamientos distribuyen?",
    a: "Distribuimos la gama completa de rodamientos: de bolas de ranura profunda, angulares de contacto, de doble hilera, de rodillos cilíndricos, cónicos, esféricos de rodillos, de agujas, axiales y especiales. Cubrimos tanto dimensiones métricas como imperiales.",
  },
  {
    q: "¿Cómo puedo estar seguro de que los productos son originales?",
    a: "Trabajamos exclusivamente con fabricantes y distribuidores autorizados. Todos nuestros productos vienen en empaques originales con hologramas y códigos de verificación del fabricante cuando aplica. Además, emitimos certificados de origen y calidad para pedidos especiales.",
  },
  {
    q: "¿Realizan envíos internacionales?",
    a: "Sí, realizamos envíos a toda América Latina, el Caribe y el mundo. Trabajamos con los principales operadores logísticos internacionales (DHL, FedEx, UPS, consolidadores marítimos) para garantizar la entrega segura de tu pedido.",
  },
  {
    q: "¿Cuánto tiempo tarda la entrega?",
    a: (
      <span>
        Depende de la disponibilidad del producto y el destino:
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Stock en Zona Libre de Colón: 1–3 días hábiles</li>
          <li>Importación de fabricante: 2–6 semanas</li>
          <li>Urgencias: consultar disponibilidad de envío express</li>
        </ul>
      </span>
    ),
  },
  {
    q: "¿Trabajan con pedidos mínimos?",
    a: "No manejamos pedidos mínimos obligatorios. Podemos atender desde una pieza hasta contenedores completos. Para pedidos de alto volumen ofrecemos precios especiales y condiciones de pago más flexibles.",
  },
  {
    q: "¿Ofrecen garantía en los productos?",
    a: "Todos nuestros productos tienen la garantía del fabricante. En caso de defecto de fabricación, gestionamos el proceso de garantía directamente con el fabricante. La garantía no cubre daños por instalación incorrecta, sobrecargas o mantenimiento inadecuado.",
  },
  {
    q: "¿Pueden ayudarme a seleccionar el rodamiento correcto?",
    a: "Absolutamente. Contamos con un equipo de especialistas que estudia constantemente el mercado. Puedes enviarnos las especificaciones de tu aplicación (velocidad, cargas, temperatura, dimensiones del eje y alojamiento) y te proporcionamos la recomendación técnica adecuada.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Puedes solicitarla a través de nuestro formulario de contacto, enviando un correo a ventas@ivorbearingsint.com, por WhatsApp al +507-69725465, o llamando directamente a nuestra oficina. Te respondemos en menos de 24 horas hábiles.",
  },
  {
    q: "¿Ofrecen crédito o facilidades de pago?",
    a: "Para clientes recurrentes y empresas, evaluamos la apertura de líneas de crédito. Aceptamos transferencias bancarias, divisas internacionales y, para ciertos clientes, carta de crédito. Contáctanos para conocer las condiciones.",
  },
  {
    q: "¿Atienden a pequeñas empresas y talleres?",
    a: "Sí, atendemos a todo tipo de clientes: grandes industrias, PYMEs, talleres de mantenimiento, distribuidores locales y particulares. Cada cliente recibe el mismo nivel de atención y calidad en los productos.",
  },
  {
    q: "¿Tienen catálogos técnicos disponibles?",
    a: "Sí, tenemos acceso a los catálogos técnicos digitales de todos los fabricantes que representamos. Puedes solicitarlos a través de nuestro formulario de contacto indicando la marca y tipo de producto de tu interés.",
  },
  {
    q: "¿Qué información necesito para cotizar por número de parte?",
    a: "Solo necesitamos el número de referencia del fabricante (por ejemplo: SKF 6205-2RS, FAG 22320-E1-K, Timken 30205). Si no tienes el número de parte, necesitamos las dimensiones: diámetro interior, diámetro exterior, ancho y tipo de rodamiento.",
  },
];

function FAQItem({ q, a }: { q: string; a: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-primary-800 group-hover:text-primary-900 transition-colors">
          {q}
        </span>
        <span className={`text-primary-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 text-gray-500 text-sm leading-relaxed pr-8">{a}</div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero title="Preguntas frecuentes" chevron={false} />

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 divide-y divide-gray-100">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>

        <div className="mt-10 text-center bg-primary-50 rounded-xl p-8 border border-primary-100">
          <h2 className="text-xl font-bold text-primary-900 mb-2">¿No encontraste tu respuesta?</h2>
          <p className="text-gray-500 text-sm mb-6">
            Escríbenos o llámanos. Nuestro equipo de especialistas está listo para ayudarte.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-primary-900 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Contactar al Equipo Técnico
          </a>
        </div>
      </div>
    </>
  );
}
