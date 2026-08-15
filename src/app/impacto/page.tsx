import type { Metadata } from 'next';
import { Hero } from '@/components/site/Hero';
import { Metrics } from '@/components/site/Metrics';
import { Quote } from '@/components/site/Quote';
import { PhilosophyWork } from '@/components/site/PhilosophyWork';
import { Stories } from '@/components/site/Stories';
import { PartnersCarousel } from '@/components/site/PartnersCarousel';
import { CtaBanner } from '@/components/site/CTABanner';

import { whatsappLink } from '@/lib/site';
import { PHILOSOPHY } from '@/data/content';

export const metadata: Metadata = {
  title: 'Impacto Social y Ambiental | PlanBee',
  description:
    'Conocé las métricas, historias y filosofía de trabajo de PlanBee. Inclusión laboral a través del diseño y la economía circular.',
};

export default function ImpactoPage() {
  return (
    <div className="flex flex-col pb-12 md:pb-16">
      {/* 1. Hero de Fondo (maneja su propio ancho) */}
      <Hero
        variant="background"
        title="El impacto, en números y en nombres"
        description="PLANBEE es una asociación civil que trabaja la inclusión laboral a través del diseño. Nuestro método combina economía circular y acompañamiento en el puesto de trabajo."
        bgAlt="Equipo de artesanos y jóvenes en el taller de PLANBEE"
        bgImageUrl="/images/backgrounds/impacto-bg.png"
        showDivider1={false}
      />

      {/* 2. Cuerpo de la página con márgenes laterales y ritmo vertical continuo */}
      <div className="container-page mt-10 flex flex-col gap-10 md:mt-14 md:gap-14">
        {/* Métricas clave */}
        <Metrics />

        {/* Primera Cita */}
        <Quote>{PHILOSOPHY[0]}</Quote>

        {/* Filosofía y Pilares de Trabajo */}
        <PhilosophyWork />

        {/* Segunda Cita */}
        <Quote>{PHILOSOPHY[1]}</Quote>

        {/* Historias reales de la comunidad */}
        <Stories />

        {/* Carrusel continuo de Aliados */}
        <PartnersCarousel />

        {/* Banner CTA Final */}
        <CtaBanner
          backgroundImageSrc="/images/backgrounds/impacto-bg.png"
          title="¿Listo para sumar productos con propósito a tu historia?"
          description="Elegí piezas artesanales para vos o merchandising personalizado con impacto social medible para tu empresa."
          primaryButton={{
            text: 'Explorar catálogo',
            href: '/catalogo',
          }}
          secondaryButton={{
            text: 'Hablar con el taller',
            href: whatsappLink(
              'Hola PlanBee, me gustaría recibir más información sobre sus programas y productos.'
            ),
            isExternal: true,
          }}
        />
      </div>
    </div>
  );
}