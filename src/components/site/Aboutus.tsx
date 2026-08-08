import { Reveal } from '@/components/site/Reveal'
import BadgeText from '@/components/site/BadgeText'
import Image from 'next/image'

const AboutUs = () => {
  return (
      <section className="container-page bg-secondary/40 py-8 md:py-10 flex flex-wrap items-center justify-around gap-10 overflow-hidden">
        <div className="">
          <Reveal>
            <div className="mx-auto flex flex-col gap-3 max-w-2xl text-center">
              <BadgeText badgeText="Somos PlanBee" />
              <h3 className="font-display text-3xl font-semibold md:text-4xl">
                Una asociación comprometida con la inclusión laboral de personas con diversidad funcional.
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Creemos que cada persona tiene talentos únicos para aportar al mundo. Desde PlanBee trabajamos con amor, profesionalismo y convicción para crear oportunidades reales de inserción, acompañando trayectorias personales con respeto y empatía.
              </p>
            </div>
          </Reveal>
        </div>
        <div className='flex flex-row gap-4'>
            <Image
                src="/images/team/08.png" 
                alt="Somos PlanBee"
                width={200}
                height={600}
                priority
                quality={90}
                className="object-cover object-center"
            />
            <Image
                src="/images/team/07.png" 
                alt="Somos PlanBee"
                width={200}
                height={600}
                priority
                quality={90}
                className="object-cover object-center"
            />
        </div>
      </section>
  )
}

export default AboutUs
