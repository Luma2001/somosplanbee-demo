'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function Counter({ value, suffix = '', label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Si el usuario prefiere movimiento reducido, actualizamos en el siguiente frame
    // para evitar el setState síncrono al evaluar el efecto.
    if (reduced) {
      const timer = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(timer);
    }

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  // Si reducedMotion está activo y ya entró en vista, mostramos 'value' directamente
  const currentValue = reduced && inView ? value : display;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border/80 bg-card px-6 py-8 text-center shadow-xs transition-shadow hover:shadow-md"
    >
      <p
        className="font-display text-4xl font-semibold text-olive md:text-5xl"
        aria-hidden="true"
      >
        {currentValue.toLocaleString('es-AR')}
        {suffix}
      </p>

      <p className="sr-only">
        {value.toLocaleString('es-AR')}
        {suffix} {label}
      </p>

      <p
        className="mt-2 text-sm font-medium tracking-wide text-muted-foreground"
        aria-hidden="true"
      >
        {label}
      </p>
    </div>
  );
}