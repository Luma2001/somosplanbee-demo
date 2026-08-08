import Image from 'next/image';
import { CUSTOM_PRODUCTS } from '@/data/content';

/**
 * Carrusel continuo de productos customizados.
 * Efecto de tira continua sin espacios entre imágenes.
 * Cumple WCAG 2.1 AA (pausable en hover/focus y respeta prefers-reduced-motion).
 */
export function CustomProductsCarousel() {
  // Duplicamos la lista para generar la ilusión de cinta/bucle infinito perfecto
  const list = [...CUSTOM_PRODUCTS, ...CUSTOM_PRODUCTS];

  return (
    <section className="overflow-hidden" aria-label="Productos corporativos personalizables">

      {/* Contenedor de la marquesina infinita sin espacio exterior */}
      <div className="group flex w-max overflow-hidden select-none mt-6">
        <ul
          className="flex w-max animate-[marquee_40s_linear_infinite] gap-0 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
        >
          {list.map((product, index) => {
            const isDuplicate = index >= CUSTOM_PRODUCTS.length;
            const uniqueKey = `${product.id}-${index}`;

            return (
              <li
                key={uniqueKey}
                className="relative h-64 w-80 shrink-0 overflow-hidden md:h-80 md:w-96"
                aria-hidden={isDuplicate ? 'true' : undefined}
              >
                <Image
                  src={product.imageSrc}
                  alt={isDuplicate ? '' : product.title}
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-95"
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Keyframes de animación marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}