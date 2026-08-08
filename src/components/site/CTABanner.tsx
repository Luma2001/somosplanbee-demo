import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/Reveal';
import { AnimatedBeeLogo } from '@/components/site/AnimatedBeeLogo';

export interface CtaButtonProps {
  text: string;
  href: string;
  isExternal?: boolean;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'olive';
}

interface CtaBannerProps {
  /** Ruta de la imagen de fondo */
  backgroundImageSrc: string;
  /** Título principal del banner */
  title: string;
  /** Descripción o texto explicativo */
  description?: string;
  /** Botón principal (opcional) */
  primaryButton?: CtaButtonProps;
  /** Botón secundario (opcional) */
  secondaryButton?: CtaButtonProps;
  /** Contenido personalizado opcional entre el texto y los botones */
  children?: ReactNode;
  /** Si deseas mostrar o no la abeja animada (por defecto true) */
  showBeeLogo?: boolean;
  /** Overlay de color de fondo: 'honey' (por defecto) u 'olive' */
  overlayVariant?: 'honey' | 'olive';
}

export function CtaBanner({
  backgroundImageSrc,
  title,
  description,
  primaryButton,
  secondaryButton,
  children,
  showBeeLogo = true,
  overlayVariant = 'honey',
}: CtaBannerProps) {
  const overlayClass =
    overlayVariant === 'honey'
      ? 'bg-honey-deep mix-blend-multiply'
      : 'bg-olive mix-blend-multiply';

  const hasButtons = Boolean(primaryButton || secondaryButton);

  // Estilo unificado de botón olive con contraste óptimo sobre los fondos
  const oliveBtnClasses =
    'bg-olive text-white hover:bg-olive/90 min-h-12 rounded-full px-8 font-semibold shadow-md transition-colors';

  return (
    <section className="relative container-page flex min-h-[70vh] w-full mt-10 items-center justify-center overflow-hidden rounded-3xl surface-card p-8 text-center md:p-12">
      {/* Background Image */}
      <Image
        src={backgroundImageSrc}
        alt={title}
        fill
        priority
        quality={90}
        className="object-cover object-center grayscale contrast-90 brightness-100"
      />

      {/* Capa de Color (Overlay) */}
      <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />

      {/* Contenido principal */}
      <Reveal className="w-full">
        <div className="container-page relative z-10 flex flex-col items-center justify-center text-center text-accent">
          <h2 className="font-display text-2xl font-bold md:text-4xl text-balance">
            {title}
          </h2>

          <div className="my-10 h-1 w-16 rounded-full bg-honey" />

          {showBeeLogo && <AnimatedBeeLogo variant="white" className="my-2" />}

          {description && (
            <p className="mx-auto mt-3 max-w-xl text-balance font-semibold text-white sm:text-lg">
              {description}
            </p>
          )}

          {/* Slot para contenido extra inyectado */}
          {children && <div className="my-6 w-full max-w-3xl">{children}</div>}

          {/* Contenedor de Botones */}
          {hasButtons && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* Botón Principal */}
              {primaryButton && (
                <Button
                  asChild
                  size="lg"
                  variant={primaryButton.variant === 'olive' ? undefined : (primaryButton.variant || 'default')}
                  className={primaryButton.variant === 'olive' || !primaryButton.variant ? oliveBtnClasses : 'min-h-12 rounded-full px-8 font-semibold shadow-md'}
                >
                  {primaryButton.isExternal ? (
                    <a
                      href={primaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {primaryButton.text}
                    </a>
                  ) : (
                    <Link href={primaryButton.href}>{primaryButton.text}</Link>
                  )}
                </Button>
              )}

              {/* Botón Secundario */}
              {secondaryButton && (
                <Button
                  asChild
                  size="lg"
                  variant={secondaryButton.variant === 'olive' ? undefined : (secondaryButton.variant || 'default')}
                  className={secondaryButton.variant === 'olive' || !secondaryButton.variant ? oliveBtnClasses : 'min-h-12 rounded-full px-8 font-semibold shadow-md'}
                >
                  {secondaryButton.isExternal ? (
                    <a
                      href={secondaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {secondaryButton.text}
                    </a>
                  ) : (
                    <Link href={secondaryButton.href}>
                      {secondaryButton.text}
                    </Link>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}