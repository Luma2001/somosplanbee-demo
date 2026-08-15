import type { Metadata } from 'next';
import { PROCESS } from '@/data/content';
import { SITE, whatsappLink } from '@/lib/site';

// Componentes del Sitio
import { Reveal } from '@/components/site/Reveal';
import AboutUs from '@/components/site/Aboutus';
import { PartnersGrid } from '@/components/site/PartnersGrid';
import { WhatWeDo } from '@/components/site/whatWeDo';
import HowWeDo from '@/components/site/HowWeDo';
import { CtaBanner } from '@/components/site/CTABanner';
import { Hero } from '@/components/site/Hero';

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10 pb-12 md:gap-14 md:pb-16">
      
      {/* 1. Hero Principal */}
      <Hero
        variant="background"
        title="El mundo debe ser pensado para ser habitado por todas las personas"
        subTitle="Creamos herramientas y espacios pensados para la diversidad"
        bgAlt="Textura de productos reciclados y confeccionados en el taller de PlanBee"
        bgImageUrl="/images/backgrounds/hero-bg.png"
        primaryButton={{ label: 'EXPLORAR CATÁLOGO', href: '/catalogo' }}
        secondaryButton={{ label: 'CONOCER MÁS', href: '/nosotros' }}
        showDivider2={false}
      />

      {/* 2. Sobre Nosotros (Identidad y Propósito) */}
      <AboutUs />

      {/* 3. Grid de Empresas Aliadas */}
      <PartnersGrid />

      {/* 4. Qué Hacemos (Líneas de Impacto / Servicios) */}
      <WhatWeDo />

      {/* 5. Cómo lo hacemos (Metodología) */}
      <HowWeDo />

      {/* 6. Proceso Circular */}
      <section
        aria-label="Proceso de producción circular"
        className="bg-secondary/40 py-12 md:py-14 border-y border-border/40"
      >
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-olive">
                Metodología sostenible
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance-tight">
                Nuestro proceso circular
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Desde el descarte industrial hasta la entrega en mano con historia adjunta.
              </p>
            </div>
          </Reveal>

          {/* Lista ordenada semántica para los pasos */}
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-5 items-start">
            {PROCESS.map((p, idx) => (
              <li key={p.step} className="flex">
                <Reveal delay={idx * 0.08} className="w-full">
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex size-12 items-center justify-center rounded-full bg-olive font-display text-lg font-bold text-white shadow-soft">
                      <span aria-hidden="true">{p.step}</span>
                      <span className="sr-only">Paso {p.step}:</span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Banner de Colaboración / Donación */}
      <div className="container-page">
        <CtaBanner
          backgroundImageSrc="/images/backgrounds/colabora-bg.png"
          title="Cada aporte hace la diferencia"
          description="Podés colaborar económicamente, donar insumos, ofrecer servicios o simplemente compartir nuestra misión. Todo suma, todo cuenta."
          primaryButton={{
            text: 'Doná ahora',
            href: whatsappLink(
              'Hola PlanBee, quiero colaborar con una donación o insumos para el taller.'
            ),
            isExternal: true,
            variant: 'default',
          }}
        />
      </div>

    </div>
  );
}







// import type { Metadata } from 'next';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { PartnersCarousel } from '@/components/site/PartnersCarousel';
// import { Reveal } from '@/components/site/Reveal';
// import { PROCESS } from '@/data/content';
// import { SITE, whatsappLink } from '@/lib/site';
// import { Hero } from '@/components/site/Hero';



// export const metadata: Metadata = {
//   title: `${SITE.name} — ${SITE.tagline}`,
//   description: SITE.description,
// };

// export default function HomePage() {
//   return (
//     <div className="flex flex-col gap-24 pb-20">
//       {/* 1. Hero Section */}
//       <Hero />

//       {/* 2. Carrusel Continuo de Aliados */}
//       <section className="border-y border-border/60 bg-secondary/30 py-4">
//         <PartnersCarousel />
//       </section>

     

//       {/* 6. Proceso de Triple Impacto */}
//       <section className="bg-secondary/40 py-20">
//         <div className="container-page">
//           <Reveal>
//             <div className="mx-auto max-w-2xl text-center">
//               <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//                 Nuestro proceso circular
//               </h2>
//               <p className="mt-3 text-muted-foreground">
//                 Desde el descarte industrial hasta la entrega en mano con historia adjunta.
//               </p>
//             </div>
//           </Reveal>

//           <div className="mt-12 grid gap-6 md:grid-cols-5">
//             {PROCESS.map((p, idx) => (
//               <Reveal key={p.step} delay={idx * 0.1}>
//                 <div className="relative flex flex-col items-center text-center">
//                   <div className="flex size-12 items-center justify-center rounded-full bg-olive font-display text-lg font-bold text-white">
//                     {p.step}
//                   </div>
//                   <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
//                     {p.title}
//                   </h3>
//                   <p className="mt-2 text-xs text-muted-foreground">{p.text}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>



//       {/* 8. Call to Action Final */}
//       <section className="container-page">
//         <Reveal>
//           <div className="relative overflow-hidden rounded-3xl bg-olive px-6 py-16 text-center text-white shadow-xl sm:px-12 md:py-20">
//             <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-balance sm:text-4xl md:text-5xl">
//               ¿Listo para sumar productos con historia a tu empresa?
//             </h2>
//             <p className="mx-auto mt-4 max-w-xl text-olive-100 text-balance sm:text-lg">
//               Diseñamos merchandising personalizado con la marca de tu empresa e impacto social medible.
//             </p>
//             <div className="mt-8 flex flex-wrap justify-center gap-4">
//               <Button
//                 asChild
//                 size="lg"
//                 className="min-h-12 rounded-full bg-white text-primary hover:bg-gold/90"
//               >
//                 <Link href="/catalogo">Explorar catálogo</Link>
//               </Button>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="min-h-12 rounded-full border-white/40 text-primary hover:bg-gold/90"
//               >
//                 <a
//                   href={whatsappLink('Hola, me gustaría recibir más información.')}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Hablar con el taller
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </Reveal>
//       </section>
//     </div>
//   );
// }