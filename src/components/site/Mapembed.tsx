'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapEmbedProps {
  /** Enlace de incorporación (src) obtenido desde Google Maps */
  embedUrl: string;
  /** Título accesible para el iframe (opcional) */
  title?: string;
  /** Clases CSS adicionales para el contenedor exterior (opcional) */
  className?: string;
}

export function MapEmbed({
  embedUrl,
  title = 'Ubicación en Google Maps',
  className = '',
}: MapEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!embedUrl) return null;

  return (
    <div
      className={`relative h-72 w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-2xs md:h-96 ${className}`}
      aria-busy={isLoading}
    >
      {/* Skeleton / Indicador de Carga */}
      {isLoading && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-muted text-muted-foreground animate-pulse select-none"
          aria-hidden="true"
        >
          <div className="flex size-12 items-center justify-center rounded-2xl bg-card border border-border shadow-xs">
            <MapPin className="size-6 text-olive animate-bounce" />
          </div>
          <span className="text-xs font-medium tracking-wide">
            Cargando mapa...
          </span>
        </div>
      )}

      {/* Iframe del Mapa */}
      <iframe
        title={title}
        src={embedUrl}
        width="100%"
        height="100%"
        onLoad={() => setIsLoading(false)}
        className={`size-full border-0 grayscale contrast-100 transition-all duration-700 hover:grayscale-0 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapEmbed;