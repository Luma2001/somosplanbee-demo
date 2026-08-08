import { Reveal } from '@/components/site/Reveal'
import { CASES } from '@/data/content'

export const Logros = () => {
  return (
    <div className="my-10">
        <Reveal>
        <h3 className="font-display text-3xl font-semibold md:text-4xl">
            Lo que logramos juntos:<br></br> empresas que marcan un cambio
        </h3>
        </Reveal>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {CASES.map((caseStudy, index) => (
            <li key={caseStudy.client}>
            <Reveal delay={index * 0.07} className="h-full">
                <article className="surface-card h-full rounded-2xl border border-border/70 bg-card p-6 shadow-2xs">
                <h4 className="font-display text-lg font-semibold text-olive">
                    {caseStudy.client}
                </h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                    {caseStudy.text}
                </p>
                </article>
            </Reveal>
            </li>
        ))}
        </ul>
    </div>
  )
}
