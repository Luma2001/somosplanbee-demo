import Image from 'next/image';
import { PARTNERS } from '@/data/content';
import { Reveal } from '@/components/site/Reveal';

export interface PartnerItem {
  name: string;
  logoSrc: string;
  scaleClass?: string;
}

/**
 * Carrusel continuo de aliados y clientes.
 * Cumple WCAG 2.1 AA permitiendo pausar en hover/focus y respetando prefers-reduced-motion.
 */
export function PartnersCarousel() {
  // Duplicamos el listado para lograr el bucle infinito continuo
  const list = [...PARTNERS, ...PARTNERS];

  return (
    <section
      className="overflow-hidden py-4 md:py-6"
      aria-label="Empresas y organizaciones aliadas de PlanBee"
    >
      {/* Encabezado de Sección */}
      <Reveal>
        <div className="container-page mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance-tight">
            Empresas que Marcan la Diferencia
          </h2>

          {/* Línea decorativa */}
          <div
            className="my-5 h-1 w-16 rounded-full bg-honey"
            aria-hidden="true"
          />
        </div>
      </Reveal>

      {/* Marquesina de Logos con Degradé en los Bordes */}
      <div className="group mt-6 flex w-full overflow-hidden select-none mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul
          className="flex w-max animate-[marquee_40s_linear_infinite] gap-4 py-3 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center"
        >
          {list.map((partner, index) => {
            const isDuplicate = index >= PARTNERS.length;
            const slug = partner.name.toLowerCase().replace(/\s+/g, '-');
            const uniqueKey = `${slug}-${index}`;

            return (
              <li
                key={uniqueKey}
                className="flex h-20 sm:h-22 min-w-48 sm:min-w-56 items-center justify-center rounded-2xl border border-border/70 bg-card px-6 sm:px-8 shadow-2xs transition-all duration-300 hover:border-olive/50 hover:bg-background hover:shadow-soft"
                aria-hidden={isDuplicate ? 'true' : undefined}
              >
                <div
                  className={`flex h-10 sm:h-12 w-full max-w-40 items-center justify-center grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 ${
                    partner.scaleClass || ''
                  }`}
                >
                  <Image
                    src={partner.logoSrc}
                    alt={isDuplicate ? '' : `Logo de ${partner.name}`}
                    width={140}
                    height={48}
                    className="max-h-10 sm:max-h-12 w-auto max-w-full object-contain"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Keyframes para marquesina continua */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default PartnersCarousel;