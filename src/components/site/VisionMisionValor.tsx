// import { Reveal } from '@/components/site/Reveal'
import { Diamond, HeartHandshake, Target } from 'lucide-react'
import BadgeText from './BadgeText'

const VisionMisionValor = () => {
  return (
    
      <section className="container-page">
        <div className="flex flex-col gap-4 text-center mb-10">
          <BadgeText badgeText='Identidad'/>

          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mt-1">
            La esencia de PlanBee
          </h2>
          <p className="text-neutral-600 mt-2 max-w-xl mx-auto text-sm md:text-base">
            Creando oportunidades a través del diseño, la inclusión y el trabajo colectivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-strech lg:grid-cols-3">
          
          {/* Misión */}
            <div className="surface-card rounded-3xl p-8 md:p-10 h-full flex-col">
              <div className="flex items-center gap-3">
                <Target className="size-6 text-honey-deep" />
                <h3 className="font-display text-2xl font-semibold">Misión</h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Promover la inclusión sociolaboral de jóvenes con diversidad funcional intelectual, generando espacios de formación y producción colaborativa donde el diseño y la creatividad sean herramientas para el desarrollo de habilidades, la autonomía y el reconocimiento de sus capacidades.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Buscamos que cada objeto producido comunique valores, historias y vínculos que transformen la mirada social sobre la discapacidad.
              </p>
            </div>

          {/* Visión */}

            <div className="surface-card rounded-3xl p-8 md:p-10 h-full flex-col">
              <div className="flex items-center gap-3">
                <HeartHandshake className="size-6 text-honey-deep" />
                <h3 className="font-display text-2xl font-semibold">Visión</h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ser una comunidad de referencia en inclusión, creatividad y formación laboral con impacto social, donde el trabajo colectivo y el diseño sean canales para la expresión, la visibilidad y la transformación de realidades.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Aspiramos a que PlanBee crezca como red, multiplicando oportunidades, alianzas y sentidos, y dejando huella positiva en cada objeto producido y en cada persona que forma parte del proceso.
              </p>
            </div>

          {/* Valores */}
     
            <div className="surface-card rounded-3xl p-8 md:p-10 h-full flex-col">
              <div className="flex items-center gap-3">
                <Diamond className="size-6 text-honey-deep" />
                <h3 className="font-display text-2xl font-semibold">Valores</h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed"> 
                Los pilares que guían cada acción y decisión en PlanBee.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Inclusión, Respeto y Autonomía: Potenciamos las capacidades de jóvenes con diversidad intelectual, valorando la singularidad de cada uno y promoviendo su independencia sociolaboral.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed"> 
                Creatividad, Colaboración y Compromiso: Usamos el diseño como canal de expresión y, a través del esfuerzo colectivo, inspiramos un cambio real y duradero en la sociedad.
              </p>

            </div>
        
        </div>
      </section>

    
  )
}

export default VisionMisionValor
