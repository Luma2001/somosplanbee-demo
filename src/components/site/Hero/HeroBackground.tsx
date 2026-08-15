import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/Reveal';

export interface ButtonConfig {
  label: string;
  href: string;
}

export interface HeroBackgroundProps {
  title: string;
  subTitle?: string;
  description?: string;
  bgImageUrl?: string;
  bgAlt?: string;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  showDivider1?: boolean;
  showDivider2?: boolean;
}

export function HeroBackground({
  title,
  subTitle,
  description,
  bgImageUrl = '/images/backgrounds/hero-bg.png',
  bgAlt = 'Textura de productos reciclados PlanBee',
  primaryButton,
  secondaryButton,
  showDivider1 = true,
  showDivider2 = true,
}: HeroBackgroundProps) {
  // Estilo unificado y accesible para botones sobre fondo oscuro
  const buttonStyle =
    'min-h-12 rounded-full border border-white/80 bg-black/30 text-white font-medium px-8 py-3.5 text-base backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-honey/30 hover:border-honey hover:text-white motion-reduce:hover:scale-100 shadow-sm';

  return (
    <section
      aria-label="Portada principal"
      className="relative flex min-h-[75vh] md:min-h-[85vh] w-full items-center justify-center overflow-hidden bg-background"
    >
      {/* Imagen de Fondo */}
      <Image
        src={bgImageUrl}
        alt={bgAlt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center grayscale contrast-125 brightness-90"
      />

      {/* Capa de Color Honey */}
      <div
        className="absolute inset-0 bg-honey-deep mix-blend-multiply opacity-90"
        aria-hidden="true"
      />

      {/* Sombra de contraste para legibilidad de texto */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      {/* Contenido Principal */}
      <div className="container-page relative z-10 mx-auto flex max-w-4xl flex-col items-center py-12 text-center text-white">
        <Reveal>
          <div className="flex flex-col items-center">
            
            {/* Subtítulo superior */}
            {subTitle && (
              <p className="text-sm font-medium uppercase tracking-widest text-white/90 sm:text-base">
                {subTitle}
              </p>
            )}

            {/* Línea decorativa 1 */}
            {showDivider1 && (
              <div
                className="my-5 h-1 w-16 rounded-full bg-honey"
                aria-hidden="true"
              />
            )}

            {/* Título Principal */}
            <h1 className="font-display text-3xl font-extrabold uppercase tracking-wide text-white drop-shadow-sm sm:text-5xl md:text-6xl text-balance-tight leading-tight">
              {title}
            </h1>

            {/* Línea decorativa 2 */}
            {showDivider2 && (
              <div
                className="my-5 h-1 w-16 rounded-full bg-honey"
                aria-hidden="true"
              />
            )}

            {/* Descripción */}
            {description && (
              <p className="mt-2 max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white/90 text-balance-tight">
                {description}
              </p>
            )}

            {/* Botones de Acción */}
            {(primaryButton || secondaryButton) && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                {primaryButton && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={buttonStyle}
                  >
                    <Link href={primaryButton.href}>
                      {primaryButton.label}
                    </Link>
                  </Button>
                )}

                {secondaryButton && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={buttonStyle}
                  >
                    <Link href={secondaryButton.href}>
                      {secondaryButton.label}
                    </Link>
                  </Button>
                )}
              </div>
            )}

          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroBackground;