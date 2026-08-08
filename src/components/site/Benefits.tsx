import { BENEFITS } from '@/data/content'
import { Reveal } from './Reveal'

export const Benefits = () => {
  return (
              <div className="my-8">
                    <Reveal>
                    <h3 className="font-display text-3xl font-semibold md:text-4xl">
                        Beneficios de una compra consciente:<br></br>Impulsá tus metas de Sostenibilidad e Inclusión (ESG)
                    </h3>
                    </Reveal>
                    <div className="mt-14 grid gap-6 sm:grid-cols-2">
                    {BENEFITS.map((benefit, index) => (
                        <Reveal key={benefit.title} delay={index * 0.07} className="h-full">
                        <article className="surface-card hover-lift h-full rounded-2xl border border-border/70 bg-card p-6 shadow-2xs transition-all">
                            <h3 className="font-display text-xl font-semibold text-foreground">
                            {benefit.title}
                            </h3>
                            <p className="mt-2 text-muted-foreground leading-relaxed">
                            {benefit.text}
                            </p>
                        </article>
                        </Reveal>
                    ))}
                    </div>
              </div>
  )
}
