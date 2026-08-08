import Image from 'next/image';

export interface MarqueeItem {
  id: string | number;
  imageSrc: string;
  title: string;
}

interface ImageMarqueeCarouselProps {
  items: readonly MarqueeItem[];
  ariaLabel?: string;
  speedInSeconds?: number;
  /** Clase opcional para el tamaño y aspecto del contenedor de cada foto */
  itemClassName?: string;
  /** Ajuste de la imagen: 'object-cover', 'object-contain', 'object-top', etc. */
  objectFit?: 'object-cover' | 'object-contain' | 'object-top' | 'object-center';
}

export function ImageMarqueeCarousel({
  items,
  ariaLabel = "Galería de imágenes en movimiento continuo",
  speedInSeconds = 35,
  itemClassName = "h-64 w-80 md:h-80 md:w-96", // Tamaño por defecto para productos
  objectFit = "object-cover",
}: ImageMarqueeCarouselProps) {
  const list = [...items, ...items];

  return (
    <section className="overflow-hidden py-3" aria-label={ariaLabel}>
      <div className="group flex w-max overflow-hidden select-none mt-6">
        <ul
          style={{ animationDuration: `${speedInSeconds}s` }}
          className="flex w-max animate-[marquee_linear_infinite] gap-0 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
        >
          {list.map((item, index) => {
            const isDuplicate = index >= items.length;
            const uniqueKey = `${item.id}-${index}`;

            return (
              <li
                key={uniqueKey}
                className={`relative shrink-0 overflow-hidden ${itemClassName}`}
                aria-hidden={isDuplicate ? 'true' : undefined}
              >
                <Image
                  src={item.imageSrc}
                  alt={isDuplicate ? '' : item.title}
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-95 ${objectFit}`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}