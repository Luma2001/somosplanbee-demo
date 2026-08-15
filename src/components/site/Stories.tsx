import { Reveal } from '@/components/site/Reveal';
import { STORIES } from '@/data/content';

export const Stories = () => {
  return (
    <section
      aria-label="Historias reales e impacto en la comunidad"
      className="container-page"
    >
      {/* Encabezado */}
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-olive">
            Testimonios
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance-tight">
            Historias reales
          </h2>
        </div>
      </Reveal>

      {/* Grilla Semántica de Historias */}
      <ul className="mt-8 grid gap-6 md:grid-cols-3 items-stretch">
        {STORIES.map((story, index) => (
          <li key={story.id} className="flex">
            <Reveal
              delay={index * 0.06}
              className="h-full w-full flex flex-col"
            >
              <article className="surface-card hover-lift flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {story.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-olive">
                    {story.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {story.text}
                  </p>
                </div>

                <blockquote className="mt-5 border-l-2 border-honey pl-3 text-sm italic leading-relaxed text-foreground/90">
                  “{story.quote}”
                </blockquote>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stories;