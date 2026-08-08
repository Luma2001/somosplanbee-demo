import { Benefits } from '@/components/site/Benefits'
import { CtaBanner } from '@/components/site/CTABanner'
import { Hero } from '@/components/site/Hero'
import { Logros } from '@/components/site/Logros'
import { RegalosCorporativos } from '@/components/site/RegalosCorporativos'
import { whatsappLink } from '@/lib/site'


const Empresas = () => {
  return (
    <>     
      <Hero  
        variant='side-by-side'
        title={
          <>
            Productos con impacto real:{" "}
            <span className="text-honey-deep">manos que crean, historias que integran.</span>
          </>
        }
        description="Transformamos descartes industriales en merchandising. En PlanBee fabricamos piezas artesanales con materiales recuperados. Cada producto
                    sostiene empleo formal e inclusivo y nace de un proceso de diseño propio.  
                    Generamos empleo inclusivo y digno para personas  con diversidad funcional."
        imageSrc="/images/production/01.png"
        imageAlt="Persona cosiendo a mano un bolso de lona recuperada"
      />
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
    </>
  )
}

export default Empresas
