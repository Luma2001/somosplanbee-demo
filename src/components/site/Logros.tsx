import { Reveal } from '@/components/site/Reveal';
import { CASES } from '@/data/content';

export const Logros = () => {
  return (
    <section className="my-12 md:my-16">
      {/* Título de la Sección */}
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl text-balance-tight">
            Lo que logramos juntos:
            <span className="block mt-1 font-normal text-muted-foreground">
              Empresas que marcan un cambio
            </span>
          </h2>
        </div>
      </Reveal>

      {/* Grilla Semántica de Casos */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 items-stretch">
        {CASES.map((caseStudy, index) => (
          <li key={caseStudy.client} className="flex">
            <Reveal
              delay={index * 0.07}
              className="h-full w-full flex flex-col"
            >
              <article className="surface-card hover-lift flex flex-1 flex-col justify-start p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-olive">
                  {caseStudy.client}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {caseStudy.text}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Logros;
