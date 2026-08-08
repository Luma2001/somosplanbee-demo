import Link from 'next/link';
import { TEAM_2 } from '@/data/content';

//Components
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/site'
import { Reveal } from '@/components/site/Reveal'
import { Hero } from '@/components/site/Hero'
import { ImageMarqueeCarousel } from '@/components/site/ImageMarqueeCarousel';
import  VisionMisionValor  from '@/components/site/VisionMisionValor';
import { CtaBanner } from '@/components/site/CTABanner';
import AlcanceEstructura from '@/components/site/AlcanceEstructura';
import NuestrosJovenes from '@/components/site/NuestrosJovenes';



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

      <VisionMisionValor />      
 
      {/* Nuestros Jóvenes - Historia & Esencia */}
      <NuestrosJovenes/>  

      {/* Alcance y Estructura */}
      <AlcanceEstructura/>

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
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Comprar productos",
              text: "Cada compra sostiene horas de taller. También producimos regalos corporativos a medida.",
              cta: "Ver catálogo",
              to: "/catalogo" as const,
            },
            {
              title: "Donar",
              text: "Aportes puntuales o mensuales que financian capacitación, herramientas y materiales.",
              cta: "Quiero donar",
              href: whatsappLink("Hola PlanBee, quiero hacer una donación."),
            },
            {
              title: "Voluntariado",
              text: "Sumá tu tiempo o tu oficio: diseño, comunicación, logística o acompañamiento en el taller.",
              cta: "Sumarme",
              href: whatsappLink("Hola PlanBee, quiero sumarme como voluntario/a."),
            },
          ].map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className="h-full">
              <article className="surface-card hover-lift flex h-full flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-honey">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{card.text}</p>
                {card.to ? (
                  <Button asChild className="mt-5 min-h-11">
                    <Link href={card.to}>{card.cta}</Link>
                  </Button>
                ) : (
                  <Button asChild className="mt-5 min-h-11">
                    <a href={card.href} target="_blank" rel="noreferrer">
                      {card.cta}
                    </a>
                  </Button>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </CtaBanner>

    </section>
  );
}