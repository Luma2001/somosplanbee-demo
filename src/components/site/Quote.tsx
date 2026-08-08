import type { ReactNode } from 'react';
import { Reveal } from '@/components/site/Reveal';

interface QuoteProps {
  children: ReactNode;
  author?: string;
}

/**
 * Cita filosófica destacada dentro del recorrido.
 * Envuelta en Reveal para animación fluida de entrada al hacer scroll.
 */
export function Quote({ children, author }: QuoteProps) {
  return (
    <Reveal className="container-page my-16">
      <figure className="mx-auto max-w-4xl">
        <blockquote className="border-l-4 border-honey pl-6 font-display text-2xl font-medium leading-snug text-foreground text-balance md:text-3xl">
          “{children}”
        </blockquote>
        {author && (
          <figcaption className="mt-4 pl-6 text-sm font-medium tracking-wide text-muted-foreground">
            — {author}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}