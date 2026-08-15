import type { Metadata } from 'next';
import { TEAM_2 } from '@/data/content';

// Componentes
import { whatsappLink } from '@/lib/site';
import { Hero } from '@/components/site/Hero';
import { ImageMarqueeCarousel } from '@/components/site/ImageMarqueeCarousel';
import VisionMisionValor from '@/components/site/VisionMisionValor';
import { CtaBanner } from '@/components/site/CTABanner';
import AlcanceEstructura from '@/components/site/AlcanceEstructura';
import NuestrosJovenes from '@/components/site/NuestrosJovenes';
import { ComoAyudar } from '@/components/site/ComoAyudar';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | PlanBee',
  description:
    'Conocé la historia, misión, valores y al equipo de jóvenes que da vida a la Asociación Civil PlanBee a través del diseño y la inclusión.',
};

export default function NosotrosPage() {
  return (
    <div className="flex flex-col pb-12 md:pb-16">
      {/* 1. Hero Principal */}
      <Hero
        variant="side-by-side"
        badgeText="Somos PlanBee"
        title={
          <>
            Creemos en el potencial{' '}
            <span className="text-honey-deep">de cada persona.</span>
          </>
        }
        description="Somos una asociación civil que acompaña a jóvenes con diversidad funcional en su camino hacia la autonomía, el aprendizaje y el empleo formal."
        imageSrc="/images/team/02.jpeg"
        imageAlt="Taller colaborativo y equipo de trabajo de la Asociación PlanBee"
        primaryButton={{
          text: 'Explorar catálogo',
          href: '/catalogo',
          variant: 'default',
        }}
        secondaryButton={{
          text: 'Solicitar información',
          href: whatsappLink(
            'Hola PlanBee, me gustaría recibir más información sobre sus actividades y cómo participar.'
          ),
          isExternal: true,
          variant: 'outline',
        }}
      />

      {/* 2. Cuerpo Modular con márgenes y separación equilibrada */}
      <div className="container-page mt-8 flex flex-col gap-10 md:mt-12 md:gap-14">
        {/* Identidad: Misión, Visión y Valores */}
        <VisionMisionValor />

        {/* Nuestros Jóvenes - Historia & Esencia */}
        <NuestrosJovenes />

        {/* Alcance y Estructura Organizacional */}
        <AlcanceEstructura />

        {/* Galería de fotos del equipo */}
        <div className="w-full overflow-hidden rounded-3xl">
          <ImageMarqueeCarousel
            items={TEAM_2}
            ariaLabel="Fotos del equipo y actividades de PlanBee"
            objectFit="object-cover"
          />
        </div>

        {/* Banner CTA con opciones de colaboración */}
        <CtaBanner
          backgroundImageSrc="/images/backgrounds/colabora-bg.png"
          title="Cómo apoyar a los jóvenes de PlanBee"
          description="Tres caminos, un mismo resultado: más horas de trabajo digno, formación y oportunidades reales."
        >
          <ComoAyudar />
        </CtaBanner>
      </div>
    </div>
  );
}