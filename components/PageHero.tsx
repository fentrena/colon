import Image from "next/image";

const BANNER = "https://ivorbearingsint.com/wp-content/uploads/2024/05/IVOR-Banners-Web.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  chevron?: boolean;
}

export default function PageHero({ title, subtitle, chevron = true }: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center text-white overflow-hidden">
      <Image src={BANNER} alt="" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 py-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-white/90 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        {chevron && (
          <div className="mt-10">
            <svg
              className="w-8 h-8 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
