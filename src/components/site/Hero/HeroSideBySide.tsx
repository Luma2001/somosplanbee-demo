import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/Reveal';

export interface ButtonProps {
  text: string;
  href: string;
  isExternal?: boolean;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'olive';
}

export interface HeroSideBySideProps {
  title: ReactNode;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  badgeText?: string;
  /** Botón principal (opcional) */
  primaryButton?: ButtonProps;
  /** Botón secundario (opcional) */
  secondaryButton?: ButtonProps;
  /** Contenido personalizado opcional entre el texto y los botones */
  children?: ReactNode;
  className?: string;
}

export function HeroSideBySide({
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  imageAlt,
  badgeText = 'Diseño, inclusión y materiales recuperados',
  children,
  className = '',
}: HeroSideBySideProps) {
  const hasButtons = Boolean(primaryButton || secondaryButton);

  // Estilo unificado de botón olive con contraste óptimo
  const oliveBtnClasses =
    'min-h-12 rounded-full bg-olive px-8 font-semibold text-white shadow-soft transition-all duration-300 hover:bg-olive/90 hover:shadow-lift';

  return (
    <section
      aria-labelledby="hero-title"
      className={`relative overflow-hidden py-2 md:py-4 ${className}`.trim()}
    >
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        
        {/* Columna de Texto */}
        <Reveal>
          <div className="flex flex-col items-start text-left">
            {badgeText && (
              <span className="inline-flex items-center gap-2 rounded-sm border border-honey-deep/20 bg-honey/20 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-honey-deep">
                <Sparkles className="size-4" aria-hidden="true" />
                {badgeText}
              </span>
            )}

            <h1
              id="hero-title"
              className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance-tight leading-tight"
            >
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}

            {children && <div className="mt-6 w-full">{children}</div>}

            {/* Contenedor de Botones */}
            {hasButtons && (
              <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
                {/* Botón Principal */}
                {primaryButton && (
                  <Button
                    asChild
                    size="lg"
                    variant={
                      primaryButton.variant === 'olive'
                        ? undefined
                        : primaryButton.variant || 'default'
                    }
                    className={
                      primaryButton.variant === 'olive' || !primaryButton.variant
                        ? oliveBtnClasses
                        : 'min-h-12 rounded-full px-8 font-semibold shadow-soft'
                    }
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
                      <Link href={primaryButton.href}>
                        {primaryButton.text}
                      </Link>
                    )}
                  </Button>
                )}

                {/* Botón Secundario */}
                {secondaryButton && (
                  <Button
                    asChild
                    size="lg"
                    variant={
                      secondaryButton.variant === 'olive'
                        ? undefined
                        : secondaryButton.variant || 'outline'
                    }
                    className={
                      secondaryButton.variant === 'olive'
                        ? oliveBtnClasses
                        : 'min-h-12 rounded-full px-8 font-semibold shadow-2xs'
                    }
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

        {/* Columna de Imagen */}
        <Reveal delay={0.15}>
          <div className="relative w-full overflow-hidden rounded-3xl border border-border/70 bg-muted shadow-lift">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1600}
              height={1104}
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-102"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default HeroSideBySide;