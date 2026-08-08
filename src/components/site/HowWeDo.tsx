import { Building2, Lightbulb, UserCheck } from 'lucide-react'
import { Reveal } from '@/components/site/Reveal'

const HowWeDo = () => {
  return (
      <section className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Cómo lo hacemos
            </h2>
            <p className="mt-3 text-muted-foreground">
              Un enfoque profesional centrado en el desarrollo integral y sustentable.
            </p>
          </div>
        </Reveal>

        <div className="items-stretch mt-12 grid gap-6 md:grid-cols-3">
          <Reveal delay={0.1} className="h-full">
            <div className="h-full flex flex-col surface-card rounded-3xl p-8">
              <Lightbulb className="size-8 text-honey-deep" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Metodología Design Thinking
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                “Pensamiento de diseño”: un enfoque centrado en las personas para resolver problemas de forma creativa e innovadora. Herramienta clave implementada en educación e innovación social.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}   className="h-full">
            <div className="h-full flex flex-col surface-card rounded-3xl p-8">
              <UserCheck className="size-8 text-olive" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Acompañamiento personalizado
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Cada persona es única. Brindamos seguimiento individual para que cada participante avance a su ritmo y alcance sus objetivos personales, educativos y laborales.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="h-full">
            <div className="h-full flex flex-col surface-card rounded-3xl p-8">
              <Building2 className="size-8 text-honey-deep" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Red con empresas aliadas
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Trabajamos junto a empresas comprometidas. Generamos oportunidades de prácticas, empleos y proyectos colaborativos que abren caminos reales para nuestros jóvenes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
  )
}

export default HowWeDo
