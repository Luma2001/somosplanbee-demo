import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
  showDivider2 = true
}: HeroBackgroundProps) {
  // Clase unificada para que ambos botones sean idénticos
  const buttonStyle =
    'rounded-full border-white/80 bg-black/20 text-white hover:bg-gold/20 hover:text-black font-medium px-8 py-6 text-base backdrop-blur-sm transition-transform hover:scale-105';

  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <Image
        src={bgImageUrl}
        alt={bgAlt}
        fill
        priority
        quality={90}
        className="object-cover object-center grayscale contrast-125 brightness-90"
      />

      {/* Capa Miel */}
      <div
        className="absolute inset-0 bg-honey-deep mix-blend-multiply"
        aria-hidden="true"
      />

      {/* Sombra de contraste */}
      <div
        className="absolute inset-0 bg-black/30"
        aria-hidden="true"
      />

      {/* Contenido Principal */}
      <div className="container-page relative z-10 mx-auto flex max-w-4xl flex-col items-center py-5 text-center text-white">
        
        {/* Bajada superior */}
        {subTitle && (
          <p className="text-sm md:text-base font-medium tracking-wide mt-4 text-white/90">
            {subTitle}
          </p>
        )}

        {/* Línea decorativa */}
        {showDivider1 && (
          <div className="w-16 h-1 bg-honey rounded-full my-6" />
        )}
        
        {/* Título Inspiracional */}
        <h1 className="font-display text-3xl font-extrabold leading-tight text-balance text-white sm:text-5xl md:text-6xl uppercase tracking-wide drop-shadow-sm">
          {title}
        </h1>

        {/* Línea decorativa */}
        {showDivider2 && (
          <div className="w-16 h-1 bg-honey rounded-full my-6" />
        )}

        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted">
             {description}
          </p>
        )}

        {/* Botones de Acción Opcionales e Idénticos */}
        {(primaryButton || secondaryButton) && (
          <div className="mt-8 mb-4 flex flex-col sm:flex-row items-center gap-4">
            
            {secondaryButton && (
              <Button asChild variant="outline" size="lg" className={buttonStyle}>
                <Link href={secondaryButton.href}>
                  {secondaryButton.label}
                </Link>
              </Button>
            )}

            {primaryButton && (
              <Button asChild variant="outline" size="lg" className={buttonStyle}>
                <Link href={primaryButton.href}>
                  {primaryButton.label}
                </Link>
              </Button>
            )}

          </div>
        )}

      </div>
    </section>
  );
}

