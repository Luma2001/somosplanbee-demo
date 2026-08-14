'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
import { useA11y } from '@/lib/a11y';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function Counter({ value, suffix = '', label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const systemReducedMotion = useReducedMotion();
  const a11y = useA11y();

  // Detener animación si el SO o el widget de accesibilidad lo indican
  const shouldReduceMotion = systemReducedMotion || a11y.noMotion;

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (shouldReduceMotion) {
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
  }, [inView, shouldReduceMotion, value]);

  const currentValue = shouldReduceMotion && inView ? value : display;

  return (
    <div
      ref={ref}
      className="surface-card flex flex-col items-center justify-center p-6 text-center transition-shadow hover:shadow-var(--shadow-lift)"
    >
      {/* Número visual animado con dígitos monoespaciados */}
      <p
        className="font-display text-4xl font-bold tabular-nums text-olive md:text-5xl"
        aria-hidden="true"
      >
        {currentValue.toLocaleString('es-AR')}
        {suffix}
      </p>

      {/* Lectura accesible consolidada para lectores de pantalla */}
      <p className="sr-only">
        {value.toLocaleString('es-AR')}
        {suffix} {label}
      </p>

      {/* Etiqueta descriptiva */}
      <p
        className="mt-2 text-sm font-medium tracking-wide text-muted-foreground"
        aria-hidden="true"
      >
        {label}
      </p>
    </div>
  );
}

export default Counter;