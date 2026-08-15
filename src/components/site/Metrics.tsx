import { METRICS, type Metric } from '@/data/content';
import { Reveal } from '@/components/site/Reveal';
import { Counter } from '@/components/site/Counter';

interface MetricsProps {
  className?: string;
}

export const Metrics = ({ className = '' }: MetricsProps) => {
  return (
    <section
      aria-label="Métricas e indicadores de impacto"
      className={`mt-12 w-full ${className}`.trim()}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {METRICS.map((metric: Metric, index: number) => (
          <li key={metric.label} className="flex">
            <Reveal
              delay={index * 0.08}
              className="h-full w-full flex flex-col"
            >
              <Counter
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Metrics;