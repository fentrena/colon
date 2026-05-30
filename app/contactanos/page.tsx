"use client";

import { useState, FormEvent } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "ventas@ivorbearingsint.com",
    href: "mailto:ventas@ivorbearingsint.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+507-69725465",
    href: "https://wa.me/50769725465",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Bodega",
    value: "+507-4744129",
    href: "tel:+50747441129",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Oficina",
    value: "+507-3986204",
    href: "tel:+50739862044",
  },
];

const locations = [
  {
    name: "Zona Libre de Colón",
    address: "Manzana 20B, Bodega 15, Coco Solito",
    city: "Zona Libre de Colón, Panamá",
  },
  {
    name: "Punta Pacifica",
    address: "Oficina Comercial",
    city: "Punta Pacifica, Panamá",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1200);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder label="Hero contacto" ratio="" className="w-full h-full rounded-none opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <p className="text-primary-200 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
            Contáctanos
          </p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-none">
            Estamos para<br />ayudarte
          </h1>
          <p className="text-lg text-primary-100 max-w-xl leading-relaxed">
            ¿Tienes alguna consulta o necesitas una cotización? Nuestro equipo de especialistas
            te responde en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-primary-900 mb-2">¡Mensaje enviado!</h2>
                <p className="text-gray-500 text-sm">
                  Gracias por contactarnos. Te responderemos en las próximas 24 horas hábiles.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black text-primary-900 mb-6">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre *</label>
                      <input type="text" required placeholder="Tu nombre"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Empresa</label>
                      <input type="text" placeholder="Tu empresa"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                    <input type="email" required placeholder="tu@correo.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono / WhatsApp</label>
                    <input type="tel" placeholder="+507 000 0000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo de consulta</label>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent">
                      <option value="">Seleccionar...</option>
                      <option>Cotización de producto</option>
                      <option>Consulta técnica</option>
                      <option>Disponibilidad de stock</option>
                      <option>Información de marcas</option>
                      <option>Catálogos técnicos</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Mensaje *</label>
                    <textarea required rows={5} placeholder="Describe tu consulta o lista los productos que necesitas cotizar (referencia, cantidad, marca)..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-primary-900 hover:bg-primary-700 disabled:opacity-60 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                    {loading ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Contact data */}
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-black mb-6">Información de Contacto</h2>
              <ul className="space-y-5">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="text-primary-300 mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <p className="text-xs text-primary-400 uppercase tracking-wide mb-0.5">{label}</p>
                      <a href={href} className="text-white hover:text-primary-200 transition-colors text-sm font-medium">
                        {value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-black text-primary-900 mb-4">Ubicaciones</h3>
              <div className="space-y-4">
                {locations.map(({ name, address, city }) => (
                  <div key={name} className="flex gap-3">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-primary-800 text-sm">{name}</p>
                      <p className="text-gray-500 text-sm">{address}</p>
                      <p className="text-gray-500 text-sm">{city}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-black text-primary-900 mb-4">Horario de Atención</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex justify-between">
                  <span>Lunes – Viernes</span>
                  <span className="font-semibold text-primary-700">8:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-semibold text-primary-700">9:00 AM – 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos y Feriados</span>
                  <span className="text-gray-400">Cerrado</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-400">
                Para urgencias fuera de horario, escríbenos por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
