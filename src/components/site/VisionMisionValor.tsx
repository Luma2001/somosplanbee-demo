import { Diamond, HeartHandshake, Target } from 'lucide-react';
import BadgeText from './BadgeText';
import { Reveal } from '@/components/site/Reveal';

export const VisionMisionValor = () => {
  return (
    <section
      aria-label="Misión, Visión y Valores de PlanBee"
      className="container-page py-4 md:py-6"
    >
      {/* Encabezado */}
      <Reveal>
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center">
          <BadgeText badgeText="Identidad" />

          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance-tight">
            La esencia de PlanBee
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Creando oportunidades a través del diseño, la inclusión y el trabajo
            colectivo.
          </p>
        </div>
      </Reveal>

      {/* Grilla Semántica de Pilares */}
      <ul className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        
        {/* Misión */}
        <li className="flex">
          <Reveal delay={0.05} className="flex h-full w-full flex-col">
            <article className="surface-card hover-lift flex flex-1 flex-col justify-start rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-honey/15">
                  <Target className="size-5 text-honey-deep" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Misión
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Promover la inclusión sociolaboral de jóvenes con diversidad funcional
                  intelectual, generando espacios de formación y producción
                  colaborativa donde el diseño y la creatividad sean herramientas
                  para el desarrollo de habilidades, la autonomía y el
                  reconocimiento de sus capacidades.
                </p>
                <p>
                  Buscamos que cada objeto producido comunique valores, historias y
                  vínculos que transformen la mirada social sobre la discapacidad.
                </p>
              </div>
            </article>
          </Reveal>
        </li>

        {/* Visión */}
        <li className="flex">
          <Reveal delay={0.1} className="flex h-full w-full flex-col">
            <article className="surface-card hover-lift flex flex-1 flex-col justify-start rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-honey/15">
                  <HeartHandshake className="size-5 text-honey-deep" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Visión
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Ser una comunidad de referencia en inclusión, creatividad y
                  formación laboral con impacto social, donde el trabajo colectivo y
                  el diseño sean canales para la expresión, la visibilidad y la
                  transformación de realidades.
                </p>
                <p>
                  Aspiramos a que PlanBee crezca como red, multiplicando
                  oportunidades, alianzas y sentidos, y dejando huella positiva en
                  cada objeto producido y en cada persona que forma parte del
                  proceso.
                </p>
              </div>
            </article>
          </Reveal>
        </li>

        {/* Valores */}
        <li className="flex">
          <Reveal delay={0.15} className="flex h-full w-full flex-col">
            <article className="surface-card hover-lift flex flex-1 flex-col justify-start rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-honey/15">
                  <Diamond className="size-5 text-honey-deep" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Valores
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p className="font-medium text-foreground/90">
                  Los pilares que guían cada acción y decisión en PlanBee:
                </p>
                <p>
                  <strong className="text-foreground">Inclusión, Respeto y Autonomía:</strong>{' '}
                  Potenciamos las capacidades de jóvenes con diversidad intelectual,
                  valorando la singularidad de cada uno y promoviendo su
                  independencia sociolaboral.
                </p>
                <p>
                  <strong className="text-foreground">Creatividad, Colaboración y Compromiso:</strong>{' '}
                  Usamos el diseño como canal de expresión y, a través del esfuerzo
                  colectivo, inspiramos un cambio real y duradero en la sociedad.
                </p>
              </div>
            </article>
          </Reveal>
        </li>

      </ul>
    </section>
  );
};

export default VisionMisionValor;