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
  ariaLabel = 'Galería de imágenes en movimiento continuo',
  speedInSeconds = 35,
  itemClassName = 'h-64 w-80 md:h-80 md:w-96',
  objectFit = 'object-cover',
}: ImageMarqueeCarouselProps) {
  if (!items || items.length === 0) return null;

  // Duplicamos la lista para generar el loop infinito continuo
  const list = [...items, ...items];

  return (
    <section
      className="relative w-full overflow-hidden py-4"
      aria-label={ariaLabel}
    >
      {/* Contenedor con máscara de desvanecimiento en los extremos */}
      <div className="group flex w-full overflow-hidden select-none mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
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
                className={`group/item relative shrink-0 overflow-hidden ${itemClassName}`}
                aria-hidden={isDuplicate ? 'true' : undefined}
              >
                <Image
                  src={item.imageSrc}
                  alt={isDuplicate ? '' : item.title}
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className={`size-full transition-transform duration-500 group-hover/item:scale-105 ${objectFit}`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Keyframes de animación continua */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default ImageMarqueeCarousel;