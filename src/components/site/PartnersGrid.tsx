import Image from 'next/image';
import { PARTNERS } from '@/data/content';
import { Reveal } from '@/components/site/Reveal';



export function PartnersGrid() {
  return (
    <section className="w-full bg-secondary/30 py-8 md:py-10">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-center text-center">

              <h3 className="font-display text-3xl font-semibold md:text-4xl">
                Empresas que Confían<br></br> en Nuestro Impacto
              </h3>
              
              

          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8 items-center justify-items-center">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group flex h-24 w-full items-center justify-center rounded-xl bg-background/50 p-4 transition-all duration-300 hover:bg-background hover:shadow-sm"
              >
                <div className="relative h-12 w-36 grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-150">
                  <Image
                    src={partner.logoSrc}
                    alt={`Logo de ${partner.name}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">

          <p className="text-xs font-semibold uppercase tracking-wider text-center text-muted-foreground">
            Gracias por Marcar la Diferencia y formar parte de este cambio.
          </p>

        </Reveal>

      </div>
    </section>
  );
}