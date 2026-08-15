import { BENEFITS } from '@/data/content';
import { Reveal } from './Reveal';

export const Benefits = () => {
  return (
    <section className="py-2 md:py-4">
      {/* Título de Sección */}
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl text-balance-tight">
            Beneficios de una compra consciente:
            <span className="block mt-1 font-normal text-muted-foreground">
              Impulsá tus metas de Sostenibilidad e Inclusión (ESG)
            </span>
          </h2>
        </div>
      </Reveal>

      {/* Grilla de Beneficios */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 items-stretch">
        {BENEFITS.map((benefit, index) => (
          <Reveal
            key={benefit.title}
            delay={index * 0.07}
            className="h-full flex flex-col"
          >
            <article className="surface-card hover-lift flex flex-1 flex-col justify-start p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {benefit.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
