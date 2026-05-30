interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  ratio?: string;
}

/**
 * Caja placeholder para imágenes pendientes.
 * Usa solo la paleta navy/gris del sitio.
 */
export default function ImagePlaceholder({
  label = "Imagen",
  className = "",
  ratio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-primary-100 border border-dashed border-primary-300 text-primary-400 ${ratio} ${className}`}
    >
      <div className="flex flex-col items-center gap-1.5">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-[11px] font-medium uppercase tracking-wide">{label}</span>
      </div>
    </div>
  );
}
