import { Reveal } from './Reveal'
import { STORIES } from '@/data/content'

export const Stories = () => {
  return (
    <>
        <Reveal>
            <h2 className="mt-20 font-display text-3xl font-semibold md:text-4xl">Historias reales</h2>
        </Reveal>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {STORIES.map((story, index) => (
                <li key={story.id}>
                <Reveal delay={index * 0.06} className="h-full">
                    <article className="surface-card h-full p-6">
                    <h3 className="font-display text-xl font-semibold">{story.name}</h3>
                    <p className="text-sm font-medium text-olive">{story.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{story.text}</p>
                    <blockquote className="mt-4 border-l-2 border-honey pl-3 text-sm italic">
                        “{story.quote}”
                    </blockquote>
                    </article>
                </Reveal>
                </li>
        ))}
        </ul>
    </>
  )
}
