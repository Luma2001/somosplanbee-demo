import Image from 'next/image';
import { PARTNERS } from '@/data/content';
import { Reveal } from '@/components/site/Reveal';

export interface PartnerItem {
  name: string;
  logoSrc: string;
  scaleClass?: string; // Permite calibración óptica individual (ej: 'scale-125')
}

export function PartnersGrid() {
  return (
    <section
      aria-label="Empresas y organizaciones aliadas que confían en PlanBee"
      className="w-full bg-secondary/30 py-12 md:py-16 border-y border-border/40"
    >
      <div className="container-page">
        {/* Encabezado */}
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance-tight">
              Empresas que Confían en Nuestro Impacto
            </h2>
            <div
              className="my-5 h-1 w-16 rounded-full bg-honey"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        {/* Grilla Semántica de Aliados */}
        <Reveal className="mt-8">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6 items-stretch justify-items-stretch">
            {PARTNERS.map((partner) => (
              <li key={partner.name} className="flex">
                <div className="group flex h-24 sm:h-28 w-full items-center justify-center rounded-2xl border border-border/70 bg-card p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:border-olive/50 hover:bg-background hover:shadow-soft">
                  <div className="relative flex h-full w-full items-center justify-center grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125 motion-reduce:group-hover:scale-100">
                    <div
                      className={`relative h-12 sm:h-14 w-full max-w-40 flex items-center justify-center ${
                        partner.scaleClass || ''
                      }`}
                    >
                      <Image
                        src={partner.logoSrc}
                        alt={`Logo de ${partner.name}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 30vw"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Mensaje de Agradecimiento */}
        <Reveal className="mt-10 md:mt-12">
          <p className="text-center text-xs sm:text-sm font-medium tracking-wide text-muted-foreground">
            Gracias por marcar la diferencia y formar parte de este cambio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default PartnersGrid;