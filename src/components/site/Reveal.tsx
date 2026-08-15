'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { useA11y } from '@/lib/a11y';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Envoltorio de aparición suave al hacer scroll.
 * Sincronizado con prefers-reduced-motion del sistema y el Widget de Accesibilidad.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const systemReducedMotion = useReducedMotion();
  const a11y = useA11y();

  // Desactivar animaciones si el SO o el widget de accesibilidad lo requieren
  const shouldReduceMotion = systemReducedMotion || a11y.noMotion;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      animate={
        inView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}

export default Reveal;