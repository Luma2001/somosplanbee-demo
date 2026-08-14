import { TEAM_2 } from '@/data/content';

//Components
import { whatsappLink } from '@/lib/site'
import { Hero } from '@/components/site/Hero'
import { ImageMarqueeCarousel } from '@/components/site/ImageMarqueeCarousel';
import  VisionMisionValor  from '@/components/site/VisionMisionValor';
import { CtaBanner } from '@/components/site/CTABanner';
import AlcanceEstructura from '@/components/site/AlcanceEstructura';
import NuestrosJovenes from '@/components/site/NuestrosJovenes';
import { ComoAyudar } from '@/components/site/ComoAyudar';



export default function NosotrosPage() {
  return (
    <section className="space-y-16 py-8 md:space-y-24 md:py-12">
      
      {/* Hero */}
      <Hero
        variant='side-by-side'
        badgeText="Somos PlanBee"
        title={
          <>
            Creemos en el potencial{" "}
            <span className="text-honey">de cada persona.</span>
          </>
        }
        description="Somos una asociación que acompaña a jóvenes con diversidad funcional en su camino hacia la autonomía y el trabajo."
        imageSrc="/images/team/02.jpeg"
        imageAlt="Taller colaborativo de la Asociación PlanBee"
                  primaryButton={{
                    text: 'Explorar catálogo',
                    href: '/catalogo',
                    variant: 'default',
                  }}
                  secondaryButton={{
                    text: 'Solicitar Información',
                    href: whatsappLink('Hola, me gustaría recibir más información.'),
                    isExternal: true,
                    variant: 'default',
        }}
      />
      {/* Identidad */}
      <VisionMisionValor />      
 
      {/* Nuestros Jóvenes - Historia & Esencia */}
      <NuestrosJovenes/>  

      {/* Alcance y Estructura */}
      <AlcanceEstructura/>

      {/* Galería de fotos */}  
      <ImageMarqueeCarousel
        items={TEAM_2}
        ariaLabel="Fotos del equipo de PlanBee"
        objectFit="object-cover" 
      />

      {/* CTA  */}
      <CtaBanner
            backgroundImageSrc="/images/backgrounds/colabora-bg.png"
            title="Cómo apoyar a los jóvenes de PlanBee"
            description="Tres caminos, un mismo resultado: más horas de trabajo digno."

      >
        <ComoAyudar/>
      </CtaBanner>

    </section>
  );
}