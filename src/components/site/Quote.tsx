import type { ReactNode } from 'react';
import { Reveal } from '@/components/site/Reveal';

interface QuoteProps {
  children: ReactNode;
  author?: string;
  className?: string;
}

/**
 * Cita reflexiva o filosófica destacada dentro del recorrido.
 * Estructura 100% semántica según estándares WCAG (figure, blockquote, figcaption, cite).
 */
export function Quote({ children, author, className = '' }: QuoteProps) {
  return (
    <Reveal className={`container-page py-4 md:py-6 ${className}`.trim()}>
      <figure className="mx-auto max-w-4xl">
        <blockquote className="border-l-4 border-honey pl-6 font-display text-2xl font-medium leading-relaxed text-foreground text-balance-tight sm:text-3xl md:text-3xl">
          <p>“{children}”</p>
        </blockquote>
        {author && (
          <figcaption className="mt-4 pl-6 text-sm font-medium tracking-wide text-muted-foreground">
            — <cite className="not-italic font-semibold text-foreground/90">{author}</cite>
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}

export default Quote;