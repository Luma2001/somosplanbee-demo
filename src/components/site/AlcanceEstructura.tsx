import { Reveal } from '@/components/site/Reveal';
import { Compass, Users } from 'lucide-react';
import BadgeText from '@/components/site/BadgeText';

const AlcanceEstructura = () => {
  return (
    <section className="container-page py-12 md:py-16">
      
      {/* Encabezado */}
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center mb-12">
        <BadgeText badgeText="Organización" />

        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance-tight">
          Alcance y Estructura
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Las dimensiones de nuestro programa y la organización de nuestro ecosistema sociolaboral.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="grid gap-8 lg:grid-cols-2 items-stretch">
        
        {/* Tarjeta 1: Alcance */}
        <Reveal delay={0.1} className="h-full flex flex-col">
          <div className="surface-card flex flex-1 flex-col justify-between p-8 transition-shadow hover:shadow-md">
            <div className="space-y-4">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-olive/15 text-olive">
                <Users className="size-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Alcance
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                El espacio está destinado a jóvenes adultos (entre 20 a 35 años aproximadamente) con diversidad funcional intelectual, que desean seguir aprendiendo y que les gustaría conseguir un empleo.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Es necesario que las personas cuenten con apoyo familiar e idealmente terapéutico, para acompañar y potenciar los objetivos trabajados en PlanBee.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Tarjeta 2: Estructura */}
        <Reveal delay={0.2} className="h-full flex flex-col">
          <div className="surface-card flex flex-1 flex-col justify-between p-8 transition-shadow hover:shadow-md">
            <div className="space-y-4">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-honey-light/40 text-honey-deep">
                <Compass className="size-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Estructura
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                El proyecto de PlanBee está posicionado sobre las ideas del <strong className="font-semibold text-foreground">Diseño Estratégico</strong>. Emplea técnicas y herramientas propias de este pensamiento de diseño, incluyendo un sistema de feedback permanente.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                En esta estructura interactúan los <strong className="font-semibold text-foreground">Talleres</strong> (serigrafía, textil, costura, etc.), el <strong className="font-semibold text-foreground">Acompañamiento Psicológico</strong> y los <strong className="font-semibold text-foreground">Desarrollos de Productos</strong> en una dinámica de diálogo y sinergia que impulsa la innovación social.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default AlcanceEstructura;