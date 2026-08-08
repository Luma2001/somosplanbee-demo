import Image from 'next/image';
import { PARTNERS } from '@/data/content';
import { Reveal } from '@/components/site/Reveal';

/**
 * Carrusel continuo de aliados y clientes.
 * Cumple WCAG 2.1 AA permitiendo pausar al pasar el cursor/foco y respetando prefers-reduced-motion.
 */
export function PartnersCarousel() {
  // Duplicamos el listado para lograr el bucle infinito continuo (infinite scroll marquee)
  const list = [...PARTNERS, ...PARTNERS];

  return (
    <section className="overflow-hidden py-1" aria-label="Clientes y aliados de PlanBee">
        <Reveal delay={0.1}>
            <div className="container-page relative z-10 text-center text-primary max-w-4xl mx-auto py-4 flex flex-col items-center">
                
                <Reveal>
                  <h3 className="font-display pt-8 text-3xl font-semibold md:text-4xl">
                      Empresas que Marcan la Diferencia
                  </h3>
                </Reveal>
                {/* Línea decorativa verde agua/turquesa como la foto */}
                <div className="w-16 h-1 bg-honey rounded-full my-8" />
                {/* <h2 className="mt-6 max-w-4xl font-display text-3xl font-bold tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                    Alianzas 
                </h2> */}
            </div>
        </Reveal> 
        <div className="group flex w-max overflow-hidden select-none">
            <ul
            className="flex w-max animate-[marquee_38s_linear_infinite] gap-4 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
            >
            {list.map((partner, index) => {
                const isDuplicate = index >= PARTNERS.length;
                // Generamos una key única usando el nombre limpiecito y el índice
                const slug = partner.name.toLowerCase().replace(/\s+/g, '-');
                const uniqueKey = `${slug}-${index}`;
                return (
                <li
                    key={uniqueKey}
                    className="flex h-20 min-w-56 items-center justify-center rounded-2xl border border-border/80 bg-card px-8 font-display text-base font-medium text-muted-foreground shadow-2xs transition-colors hover:border-olive/40 hover:text-foreground"
                    aria-hidden={isDuplicate ? 'true' : undefined}
                >
                    <Image
                    src={`${partner.logoSrc}`}
                    alt={`Logo de ${partner.name}`}
                    width={160}
                    height={0}
                    className="max-h-20 w-auto object-cover"
                    />
                </li>
                );
            })}
            </ul>
        </div>

      {/* Definición de la animación marquee si no está en globals.css */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}