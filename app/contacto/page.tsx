"use client";

import { useState, FormEvent } from "react";
import PageHero from "@/components/PageHero";

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
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+507-69725465",
    href: "https://wa.me/50769725465",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
  { name: "Zona Libre de Colón", city: "Zona Libre de Colón, Panamá." },
  { name: "Punta Pacifica", city: "Punta Pacifica, Panamá." },
];

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <PageHero title="Contáctenos" />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-[#EBF0F0] rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-navy mb-2">¡Mensaje enviado!</h2>
                <p className="text-gray-600 text-sm">
                  Gracias por contactarnos. Te responderemos en las próximas 24 horas hábiles.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-navy mb-6">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Nombre *</label>
                    <input type="text" required placeholder="Tu nombre"
                      className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy/40" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Email *</label>
                    <input type="email" required placeholder="tu@correo.com"
                      className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy/40" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Teléfono</label>
                    <input type="tel" placeholder="+507 000 0000"
                      className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy/40" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Asunto</label>
                    <input type="text" placeholder="Asunto de tu consulta"
                      className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy/40" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Mensaje *</label>
                    <textarea required rows={5} placeholder="Describe tu consulta o lista los productos que necesitas cotizar..."
                      className="w-full border border-navy/20 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy/40 resize-none" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-navy hover:bg-navy/90 disabled:opacity-60 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Datos de contacto */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Información de contacto</h2>
            <ul className="space-y-5 mb-10">
              {contactInfo.map(({ icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="text-navy mt-0.5 shrink-0">{icon}</div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">{label}</p>
                    <a href={href} className="text-navy hover:underline text-sm font-medium">{value}</a>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-navy mb-4">Ubicaciones</h3>
            <ul className="space-y-4">
              {locations.map(({ name, city }) => (
                <li key={name} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-navy mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-navy text-sm">{name}</p>
                    <p className="text-gray-600 text-sm">{city}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
