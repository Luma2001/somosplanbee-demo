import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Heart, Users } from "lucide-react"
import { Reveal } from "@/components/site/Reveal"
import BadgeText from "@/components/site/BadgeText"


const WhatWeDo = () => {
  return (
      <section className="container-page my-8">
        <Reveal>
          <div className="mx-auto flex flex-col gap-3 max-w-2xl text-center">
            <BadgeText badgeText="Nuestras áreas de trabajo" />
 
            <h3 className="font-display text-3xl font-semibold md:text-4xl">
              Qué hacemos
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              Generamos impacto a través del diseño, la formación laboral y la contención familiar.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3 items-stretch">
          {/* Tarjeta 1: Objetos con Propósito */}
          <Reveal delay={0.1} className="h-full">
            <div className="surface-card h-full flex flex-col justify-between rounded-3xl p-8 transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-honey-light/40 text-honey-deep">
                  <Briefcase className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Objetos con propósito
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Diseñamos y creamos productos únicos, elaborados en nuestro taller por los jóvenes. Cada objeto cuenta una historia y refleja una habilidad, generando recursos que impulsan nuestros proyectos.
                </p>
              </div>
              <div className="mt-6 pt-4">
                <Button asChild variant="ghost" className="px-0 font-semibold text-honey-deep hover:bg-transparent hover:text-honey-deep/80">
                  <Link href="/catalogo" className="inline-flex items-center gap-2">
                    Ver productos <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Tarjeta 2: Formación Laboral */}
          <Reveal delay={0.2} className="h-full">
            <div className="surface-card flex h-full flex-col justify-between rounded-3xl p-8 transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-olive-100/60 text-olive">
                  <Users className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Talleres de formación laboral
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Brindamos talleres prácticos que preparan a los jóvenes para el mundo del trabajo. Enseñamos habilidades específicas, prácticas de organización, responsabilidad y competencias sociales necesarias para desenvolverse en entornos laborales reales.
                </p>
              </div>
              <div className="mt-6 pt-4">
                <Button asChild variant="ghost" className="px-0 font-semibold text-honey-deep hover:bg-transparent hover:text-honey-deep/80">
                  <Link href="/impacto" className="inline-flex items-center gap-2">
                    Conocer más <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Tarjeta 3: Talleres para Padres */}
          <Reveal delay={0.3} className="h-full">
            <div className="surface-card flex h-full flex-col justify-between rounded-3xl p-8 transition-shadow hover:shadow-md">
              <div className="space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Heart className="size-6 text-honey-deep" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Talleres para familias
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ofrecemos espacios de encuentro y aprendizaje para familias, donde trabajamos juntos sobre herramientas, emociones y estrategias para acompañar mejor a los jóvenes en el camino hacia la inclusión y una vida más independiente.
                </p>
              </div>
                            <div className="mt-6 pt-4">
                <Button asChild variant="ghost" className="px-0 font-semibold text-honey-deep hover:bg-transparent hover:text-honey-deep/80">
                  <Link href="/nosotros" className="inline-flex items-center gap-2">
                    Conocer más <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
  )
}

export default WhatWeDo
