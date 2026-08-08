import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';




export interface ButtonProps {
  text: string;
  href: string;
  isExternal?: boolean;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'olive';
}

export interface HeroSideBySideProps {
  title: ReactNode; // Permite strings o JSX 
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
    /** Overlay de color de fondo: 'honey' (por defecto) u 'olive' */
  overlayVariant?: 'honey' | 'olive';
}

export function HeroSideBySide({
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  imageAlt,
  badgeText = "Diseño, inclusión y materiales recuperados",
}: HeroSideBySideProps) {



  const hasButtons = Boolean(primaryButton || secondaryButton);

  // Estilo unificado de botón olive con contraste óptimo sobre los fondos
  const oliveBtnClasses =
    'bg-olive text-white hover:bg-olive/90 min-h-12 rounded-full px-8 font-semibold shadow-md transition-colors';




  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="container-page grid items-center gap-6 py-4 md:py-8 lg:grid-cols-2">
        <div>
          {badgeText && (
            <p className="inline-flex items-center gap-2  bg-honey-deep px-4 py-1.5 text-sm font-medium text-accent-foreground">
              <Sparkles className="size-4" aria-hidden="true" />
              {badgeText}
            </p>
          )}

          <h1 id="hero-title" className="mt-6 font-display text-4xl font-semibold md:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {description}
            </p>
          )}
          
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

        <div className="relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1600}
            height={1104}
            priority
            quality={85}
            className="w-full rounded-3xl object-cover shadow-(--shadow-lift)"
          />
        </div>
      </div>
    </section>
  );
}