import { Reveal } from '@/components/site/Reveal';
import { SUSTAINABILITY } from '@/data/content';

export const PhilosophyWork = () => {
  return (
    <section
      aria-label="Filosofía de trabajo y sustentabilidad"
      className="container-page"
    >
      <Reveal>
        <div className="surface-card grid gap-8 rounded-3xl p-8 md:p-12 lg:grid-cols-3 items-center">
          
          {/* Columna Lateral de Introducción */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-olive">
              Filosofía de trabajo
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance-tight">
              Sustentabilidad integral
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              No solo reutilizamos materiales; diseñamos sistemas que empoderan
              a las personas y garantizan durabilidad en cada pieza.
            </p>
          </div>

          {/* Grilla Semántica de Pilares de Sustentabilidad */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-2 items-stretch">
            {SUSTAINABILITY.map((item, index) => (
              <li key={item.title} className="flex">
                <Reveal
                  delay={index * 0.06}
                  className="h-full w-full flex flex-col"
                >
                  <article className="surface-card hover-lift flex flex-1 flex-col justify-start p-6 sm:p-7">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>

        </div>
      </Reveal>
    </section>
  );
};

export default PhilosophyWork;