import { Building2, Lightbulb, UserCheck } from 'lucide-react';
import { Reveal } from '@/components/site/Reveal';

const METODOLOGIAS = [
  {
    icon: Lightbulb,
    iconBg: 'bg-honey/15 text-honey-deep',
    title: 'Metodología Design Thinking',
    description:
      '“Pensamiento de diseño”: un enfoque centrado en las personas para resolver problemas de forma creativa e innovadora. Herramienta clave implementada en educación e innovación social.',
  },
  {
    icon: UserCheck,
    iconBg: 'bg-olive/15 text-olive',
    title: 'Acompañamiento personalizado',
    description:
      'Cada persona es única. Brindamos seguimiento individual para que cada participante avance a su ritmo y alcance sus objetivos personales, educativos y laborales.',
  },
  {
    icon: Building2,
    iconBg: 'bg-honey/15 text-honey-deep',
    title: 'Red con empresas aliadas',
    description:
      'Trabajamos junto a empresas comprometidas. Generamos oportunidades de prácticas, empleos y proyectos colaborativos que abren caminos reales para nuestros jóvenes.',
  },
];

export const HowWeDo = () => {
  return (
    <section className="container-page py-2 md:py-4">
      {/* Encabezado */}
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance-tight">
            Cómo lo hacemos
          </h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-muted-foreground">
            Un enfoque profesional centrado en el desarrollo integral y sustentable.
          </p>
        </div>
      </Reveal>

      {/* Grilla de Metodologías */}
      <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
        {METODOLOGIAS.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.title}
              delay={0.1 * (index + 1)}
              className="h-full flex flex-col"
            >
              <article className="surface-card hover-lift flex flex-1 flex-col justify-start p-8">
                <div
                  className={`inline-flex size-12 items-center justify-center rounded-2xl ${item.iconBg}`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default HowWeDo;