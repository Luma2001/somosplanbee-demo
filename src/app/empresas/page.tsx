import type { Metadata } from 'next';
import { Benefits } from '@/components/site/Benefits';
import { CtaBanner } from '@/components/site/CTABanner';
import { Hero } from '@/components/site/Hero';
import { Logros } from '@/components/site/Logros';
import { RegalosCorporativos } from '@/components/site/RegalosCorporativos';
import { whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Empresas y Merchandising con Impacto | PlanBee',
  description:
    'Merchandising sustentable y regalos corporativos con propósito. Confección artesanal y empleo inclusivo para jóvenes con diversidad funcional.',
};

export default function EmpresasPage() {
  return (
    <div className="flex flex-col pb-12 md:pb-16">
      {/* 1. Hero Principal (ya gestiona su propio ancho internamente) */}
      <Hero
        variant="side-by-side"
        title={
          <>
            Productos con impacto real:{' '}
            <span className="text-honey-deep">
              manos que crean, historias que integran.
            </span>
          </>
        }
        description="Transformamos descartes industriales en merchandising sustentable y regalos corporativos. En PlanBee fabricamos piezas artesanales que sostienen empleo formal e inclusivo para jóvenes con diversidad funcional."
        imageSrc="/images/production/01.png"
        imageAlt="Persona cosiendo a mano un bolso de lona recuperada en el taller de PlanBee"
      />

      {/* 2. Cuerpo de la página: Contenedor con márgenes laterales y separación vertical compacta */}
      <div className="container-page mt-8 flex flex-col gap-10 md:mt-12 md:gap-14">
        {/* Grilla de Beneficios */}
        <Benefits />

        {/* Regalos corporativos */}
        <RegalosCorporativos />

        {/* Empresas que marcan un cambio */}
        <Logros />

        {/* Banner de Llamado a la Acción */}
        <CtaBanner
          backgroundImageSrc="/images/backgrounds/presupuesto-bg.png"
          title="Contanos qué necesitás"
          description="Trabajamos desde 25 unidades. Te enviamos propuesta de diseño, plazos y el impacto social y ambiental estimado de tu pedido."
          primaryButton={{
            text: 'Solicitar presupuesto',
            href: whatsappLink(
              'Hola PlanBee, necesito una propuesta de merchandising corporativo para mi empresa.'
            ),
            isExternal: true,
          }}
        />
      </div>
    </div>
  );
}
