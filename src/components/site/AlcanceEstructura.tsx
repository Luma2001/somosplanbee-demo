import { Reveal } from '@/components/site/Reveal'
import { Compass, Users } from 'lucide-react'
import BadgeText from '@/components/site/BadgeText'

const AlcanceEstructura = () => {
  return (
      <section className="container-page">
        
        <div className="flex flex-col gap-4 text-center mb-10">
          <BadgeText badgeText='Organización'/>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mt-1">
            Alcance y Estructura
          </h2>
          <p className="text-neutral-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
            Las dimensiones de nuestro programa y la organización de nuestro ecosistema sociolaboral.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="surface-card flex h-full flex-col justify-between rounded-3xl p-8">
              <div className="space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Users className="size-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Alcance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El espacio está destinado a jóvenes adultos (entre 20 a 35 años aproximadamente) con diversidad funcional intelectual, que desean seguir aprendiendo y que les gustaría conseguir un empleo. 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Es necesario que las personas cuenten con apoyo familiar e idealmente, terapéutico, para acompañar y potenciar los objetivos trabajados en PlanBee.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-card flex h-full flex-col justify-between rounded-3xl p-8">
              <div className="space-y-4">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Compass className="size-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Estructura</h3>
                <p className="text-muted-foreground leading-relaxed">
                  El proyecto de PlanBee está posicionado sobre las ideas del <strong>Diseño Estratégico</strong>. Emplea técnicas y herramientas propias de este pensamiento de diseño, incluyendo un sistema de feedback permanente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En esta estructura interactúan los <strong>Talleres</strong> (serigrafía, textil, costura, etc.), el <strong>Acompañamiento Psicológico</strong> y los <strong>Desarrollos de Productos</strong> en una dinámica de diálogo y sinergia que impulsa la innovación social.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

  )
}

export default AlcanceEstructura
