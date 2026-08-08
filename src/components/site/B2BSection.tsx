// import {  CASES } from '@/data/content';
import { whatsappLink } from '@/lib/site';

// import { Reveal } from '@/components/site/Reveal';
import { Benefits } from '@/components/site/Benefits';

import { Logros } from '@/components/site/Logros';
import { CtaBanner } from '@/components/site/CTABanner';
// import { CustomProductsCarousel } from '@/components/site/CustomProductsCarousel';
import { RegalosCorporativos } from '@/components/site/RegalosCorporativos';



export function B2BSection() {
  return (
    <section className="container-page py-10 md:py-16" aria-label="Soluciones B2B y Regalos Corporativos">

          {/* Grilla de Beneficios */}
          <Benefits/>
 
          {/* Regalos corporativos*/}
          <RegalosCorporativos />

          {/* Empresas que marcan un cambio */}
          <Logros/>

          {/* CTA  */}
          <CtaBanner
                backgroundImageSrc="/images/backgrounds/presupuesto-bg.png"
                title="Contanos qué necesitás"
                description="Trabajamos desde 25 unidades. Te enviamos propuesta de diseño, plazos y el impacto estimado del pedido."
                primaryButton={{
                  text: 'Solicitar presupuesto',
                  href: whatsappLink('Hola PlanBee, necesito una propuesta de merchandising corporativo.'),
                  isExternal: true,
                }}
          />
           
    </section>
  );
}