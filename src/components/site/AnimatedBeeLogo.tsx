'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface AnimatedBeeLogoProps {
  /** Opción para elegir el color del logo: 'black' o 'white' */
  variant?: 'black' | 'white';
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const LOGO_PATHS = {
  black: '/images/logo/logo_bee_black.png', 
  white: '/images/logo/logo_bee_white.png',
};

/**
 * Componente reutilizable para animar el logo PNG de PlanBee
 * con efecto de vuelo continuo y variante de color.
 */
export function AnimatedBeeLogo({
  variant = 'black',
  alt = 'PlanBee',
  width = 120,
  height = 120,
  className = '',
}: AnimatedBeeLogoProps) {
  const logoSrc = LOGO_PATHS[variant];

  return (
    <motion.div
      className={`inline-block select-none ${className}`}
      animate={{
        // Movimiento de flotación vertical + ligera inclinación de vuelo
        y: [0, -10, 0, -6, 0],
        rotate: [0, 3, -2, 2, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={logoSrc}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-auto object-contain"
        priority
      />
    </motion.div>
  );
}