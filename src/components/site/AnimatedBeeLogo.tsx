'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useA11y } from '@/lib/a11y';

interface AnimatedBeeLogoProps {
  /** Opción para elegir el color del logo: 'black' o 'white' */
  variant?: 'black' | 'white';
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  isDecorative?: boolean;
}

const LOGO_PATHS = {
  black: '/images/logo/logo_bee_black.png',
  white: '/images/logo/logo_bee_white.png',
};

/**
 * Componente reutilizable para animar el logo PNG de PlanBee
 * con efecto de vuelo continuo, variante de color y soporte de accesibilidad.
 */
export function AnimatedBeeLogo({
  variant = 'black',
  alt = 'Logo PlanBee',
  width = 120,
  height = 120,
  className = '',
  isDecorative = false,
}: AnimatedBeeLogoProps) {
  const logoSrc = LOGO_PATHS[variant];
  const systemReducedMotion = useReducedMotion();
  const a11y = useA11y();

  // Si el usuario desactivó animaciones desde el widget o desde el SO, detenemos el vuelo
  const shouldReduceMotion = systemReducedMotion || a11y.noMotion;

  return (
    <motion.div
      data-decorative={isDecorative ? 'true' : undefined}
      className={`inline-block select-none ${className}`}
      animate={
        shouldReduceMotion
          ? { y: 0, rotate: 0 }
          : {
              // Movimiento de flotación vertical + ligera inclinación de vuelo
              y: [0, -10, 0, -6, 0],
              rotate: [0, 3, -2, 2, 0],
            }
      }
      transition={{
        duration: 3.5,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={logoSrc}
        alt={isDecorative ? '' : alt}
        width={width}
        height={height}
        className="h-auto w-auto object-contain"
        priority
      />
    </motion.div>
  );
}