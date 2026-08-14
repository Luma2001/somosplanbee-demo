import Image from 'next/image';
import { CUSTOM_PRODUCTS } from '@/data/content';

/**
 * Carrusel continuo de productos customizados.
 * Efecto de cinta infinita con máscara de degradado lateral.
 * Cumple estrictamente WCAG 2.1 AA (pausable en hover/focus y respeta reducción de movimiento).
 */
export function CustomProductsCarousel() {
  // Duplicamos la lista para generar la ilusión de cinta infinita fluida
  const list = [...CUSTOM_PRODUCTS, ...CUSTOM_PRODUCTS];

  return (
    <section
      className="relative w-full overflow-hidden py-6"
      aria-label="Galería de productos corporativos personalizables"
    >
      {/* Contenedor de la marquesina con máscara de degradado en los extremos */}
      <div className="group flex w-full overflow-hidden select-none mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul
          className="flex w-max animate-[marquee_40s_linear_infinite] gap-4 py-2 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6"
        >
          {list.map((product, index) => {
            const isDuplicate = index >= CUSTOM_PRODUCTS.length;
            const uniqueKey = `${product.id}-${index}`;

            return (
              <li
                key={uniqueKey}
                className="group/item relative h-64 w-72 sm:h-72 sm:w-80 md:h-80 md:w-96 shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xs transition-transform duration-300 hover:scale-[1.02] hover:shadow-soft"
                aria-hidden={isDuplicate ? 'true' : undefined}
              >
                <Image
                  src={product.imageSrc}
                  alt={isDuplicate ? '' : product.title}
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="object-cover object-center transition-transform duration-500 group-hover/item:scale-105"
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

export default CustomProductsCarousel;