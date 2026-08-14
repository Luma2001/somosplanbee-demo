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
      ? 'bg-honey-deep/90 mix-blend-multiply'
      : 'bg-olive/90 mix-blend-multiply';

  const hasButtons = Boolean(primaryButton || secondaryButton);

  const oliveBtnClasses =
    'bg-primary text-primary-foreground hover:bg-primary/90 min-h-12 rounded-full px-8 font-semibold shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]';

  return (
    <section className="w-full py-8 md:py-12">
      <div className="container-page">
        <div className="relative flex min-h-[60vh] md:min-h-[65vh] w-full items-center justify-center overflow-hidden rounded-3xl p-8 text-center md:p-12 shadow-var(--shadow-lift)">
          {/* Background Image decorativo */}
          <Image
            src={backgroundImageSrc}
            alt=""
            aria-hidden="true"
            fill
            priority
            quality={90}
            className="object-cover object-center grayscale contrast-90 brightness-100 select-none"
          />

          {/* Capa de Color (Overlay) */}
          <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />

          {/* Contenido principal */}
          <Reveal className="relative z-10 w-full max-w-3xl">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl text-balance-tight">
                {title}
              </h2>

              <div className="my-6 h-1 w-16 rounded-full bg-honey" aria-hidden="true" />

              {showBeeLogo && (
                <AnimatedBeeLogo
                  variant="white"
                  className="my-2"
                  isDecorative={true}
                />
              )}

              {description && (
                <p className="mx-auto mt-3 max-w-xl text-base sm:text-lg font-medium leading-relaxed text-white/95 text-balance-tight">
                  {description}
                </p>
              )}

              {/* Slot para contenido extra inyectado */}
              {children && <div className="my-6 w-full">{children}</div>}

              {/* Contenedor de Botones */}
              {hasButtons && (
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {/* Botón Principal */}
                  {primaryButton && (
                    <Button
                      asChild
                      size="lg"
                      className={
                        primaryButton.variant === 'olive' || !primaryButton.variant
                          ? oliveBtnClasses
                          : 'min-h-12 rounded-full px-8 font-semibold shadow-xs'
                      }
                    >
                      {primaryButton.isExternal ? (
                        <a
                          href={primaryButton.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${primaryButton.text} (abre en una nueva pestaña)`}
                        >
                          {primaryButton.text}
                          <span className="sr-only"> (abre en una nueva pestaña)</span>
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
                      className={
                        secondaryButton.variant === 'olive' || !secondaryButton.variant
                          ? oliveBtnClasses
                          : 'min-h-12 rounded-full px-8 font-semibold shadow-xs'
                      }
                    >
                      {secondaryButton.isExternal ? (
                        <a
                          href={secondaryButton.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${secondaryButton.text} (abre en una nueva pestaña)`}
                        >
                          {secondaryButton.text}
                          <span className="sr-only"> (abre en una nueva pestaña)</span>
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
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;