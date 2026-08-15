import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Heart, Users } from 'lucide-react';
import { Reveal } from '@/components/site/Reveal';
import BadgeText from '@/components/site/BadgeText';

export const WhatWeDo = () => {
  return (
    <section
      aria-label="Nuestras áreas de trabajo e impacto"
      className="container-page py-2 md:py-4"
    >
      {/* Encabezado */}
      <Reveal>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <BadgeText badgeText="Nuestras áreas de trabajo" />

          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance-tight">
            Qué hacemos
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            Generamos impacto a través del diseño, la formación laboral y la
            contención familiar.
          </p>
        </div>
      </Reveal>

      {/* Grilla Semántica de Áreas de Trabajo */}
      <ul className="mt-12 grid gap-8 md:grid-cols-3 items-stretch">
        
        {/* Tarjeta 1: Objetos con Propósito */}
        <li className="flex">
          <Reveal delay={0.1} className="h-full w-full flex flex-col">
            <article className="surface-card hover-lift flex h-full flex-col justify-between rounded-3xl p-8">
              <div className="space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-honey/20 text-honey-deep">
                  <Briefcase className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Objetos con propósito
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Diseñamos y creamos productos únicos, elaborados en nuestro taller
                  por los jóvenes. Cada objeto cuenta una historia y refleja una
                  habilidad, generando recursos que impulsan nuestros proyectos.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40">
                <Button
                  asChild
                  variant="ghost"
                  className="min-h-11 px-0 font-semibold text-honey-deep hover:bg-transparent hover:text-honey-deep/80"
                >
                  <Link
                    href="/catalogo"
                    className="inline-flex items-center gap-2"
                    aria-label="Ver el catálogo de productos con propósito"
                  >
                    Ver productos <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          </Reveal>
        </li>

        {/* Tarjeta 2: Formación Laboral */}
        <li className="flex">
          <Reveal delay={0.2} className="h-full w-full flex flex-col">
            <article className="surface-card hover-lift flex h-full flex-col justify-between rounded-3xl p-8">
              <div className="space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-olive/15 text-olive">
                  <Users className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Talleres de formación laboral
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Brindamos talleres prácticos que preparan a los jóvenes para el
                  mundo del trabajo. Enseñamos habilidades específicas, prácticas de
                  organización, responsabilidad y competencias sociales para desenvolverse
                  en entornos reales.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40">
                <Button
                  asChild
                  variant="ghost"
                  className="min-h-11 px-0 font-semibold text-honey-deep hover:bg-transparent hover:text-honey-deep/80"
                >
                  <Link
                    href="/impacto"
                    className="inline-flex items-center gap-2"
                    aria-label="Conocer más sobre los talleres de formación laboral"
                  >
                    Conocer más <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          </Reveal>
        </li>

        {/* Tarjeta 3: Talleres para Familias */}
        <li className="flex">
          <Reveal delay={0.3} className="h-full w-full flex flex-col">
            <article className="surface-card hover-lift flex h-full flex-col justify-between rounded-3xl p-8">
              <div className="space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-honey/20 text-honey-deep">
                  <Heart className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Talleres para familias
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ofrecemos espacios de encuentro y aprendizaje para familias, donde
                  trabajamos herramientas, emociones y estrategias para acompañar
                  a los jóvenes en el camino hacia la inclusión y una vida autónoma.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40">
                <Button
                  asChild
                  variant="ghost"
                  className="min-h-11 px-0 font-semibold text-honey-deep hover:bg-transparent hover:text-honey-deep/80"
                >
                  <Link
                    href="/nosotros"
                    className="inline-flex items-center gap-2"
                    aria-label="Conocer más sobre los talleres para familias"
                  >
                    Conocer más <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          </Reveal>
        </li>

      </ul>
    </section>
  );
};

export default WhatWeDo;