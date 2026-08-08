import { METRICS } from '@/data/content'
import { Reveal } from '@/components/site/Reveal'
import { Counter } from '@/components/site/Counter'

export const Metrics = () => {
  return (
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {METRICS.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 0.08}>
                    <Counter value={metric.value} suffix={metric.suffix} label={metric.label} />
                </Reveal>
                ))}
            </div>
  )
}
