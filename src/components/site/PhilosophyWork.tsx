import React from 'react'
import { Reveal } from '@/components/site/Reveal'
import { SUSTAINABILITY } from '@/data/content'

export const PhilosophyWork = () => {
  return (
    <Reveal>
    <div className="grid gap-8 rounded-3xl border border-border/80 bg-card p-8 md:p-12 lg:grid-cols-3">
        <div className="flex flex-col justify-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-olive">
            Filosofía de trabajo
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
            Sustentabilidad integral
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
            No solo reutilizamos materiales; diseñamos sistemas que empoderan a las personas
            y garantizan durabilidad en cada pieza.
        </p>
        </div>
    
        <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
        {SUSTAINABILITY.map((item, index) => (
            <li key={item.title}>
            <Reveal delay={index * 0.06} className="h-full">
                <article className="surface-card hover-lift h-full p-6">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </article>
            </Reveal>
            </li>
        ))}
        </ul>
    </div>
    </Reveal>
  )
}
