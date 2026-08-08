interface MapEmbedProps {
  /** Enlace de incorporación (src) obtenido desde Google Maps -> Compartir -> Incorporar un mapa */
  embedUrl: string;
}

export function MapEmbed({ embedUrl }: MapEmbedProps) {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-border/80 shadow-sm md:h-96">
      <iframe
        title="Ubicación de PlanBee en Google Maps"
        src={embedUrl}
        width="100%"
        height="100%"
        className="border-0 grayscale contrast-100 hover:grayscale-0 transition-all duration-500"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}