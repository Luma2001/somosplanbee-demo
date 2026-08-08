//Components
import { Hero } from '@/components/site/Hero'
import { Metrics } from '@/components/site/Metrics'
import { Quote } from '@/components/site/Quote'
import { PhilosophyWork } from '@/components/site/PhilosophyWork'
import { Stories } from '@/components/site/Stories'
import { PartnersCarousel } from '@/components/site/PartnersCarousel'
import { CtaBanner } from '@/components/site/CTABanner'

import { whatsappLink } from '@/lib/site'
import { PHILOSOPHY } from '@/data/content'


const Impacto = () => {
  return (
    <section className="flex flex-col gap-10 pb-10 md:gap-14">
 
        <Hero 
            variant="background"
            title=' El impacto, en números y en nombres'
            description='PLANBEE es una asociación civil que trabaja la inclusión laboral a través del diseño.
                        Nuestro método combina economía circular y acompañamiento en el puesto de trabajo.'
            bgAlt='Equipo PLANBEE'
            bgImageUrl='/images/backgrounds/impacto-bg.png'
            showDivider1 = { false }
        />
        
        <div className="container-page ">

            <Metrics/>
            
            <Quote>{PHILOSOPHY[0]}</Quote>
 
            <PhilosophyWork/>

            <Quote>{PHILOSOPHY[1]}</Quote>

            <Stories />
         
            <PartnersCarousel />

            <CtaBanner
                    backgroundImageSrc="/images/backgrounds/impacto-bg.png"
                    title="¿Listo para sumar productos con propósito a tu historia?"
                    description="Elegí piezas artesanales para vos o merchandising personalizado con impacto social medible para tu empresa."
                    primaryButton={{
                    text: 'Explorar catálogo',
                    href: '/catalogo',
                    variant: 'default',
                    }}
                    secondaryButton={{
                    text: 'Hablar con el taller',
                    href: whatsappLink('Hola, me gustaría recibir más información.'),
                    isExternal: true,
                    variant: 'default',
                    }}
            />
        </div>


    </section>
  );
}

export default Impacto

