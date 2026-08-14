import { Reveal } from '@/components/site/Reveal';
import BadgeText from '@/components/site/BadgeText';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="w-full bg-secondary/40 py-12 md:py-16 overflow-hidden">
      <div className="container-page flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        
        {/* Bloque de Texto */}
        <div className="max-w-2xl text-center lg:text-left">
          <Reveal>
            <div className="flex flex-col items-center lg:items-start gap-4">
              <BadgeText badgeText="Somos PlanBee" />
              
              <h3 className="font-display text-3xl font-semibold text-foreground md:text-4xl text-balance-tight">
                Una asociación comprometida con la inclusión laboral de personas con diversidad funcional.
              </h3>
              
              <p className="mt-2 text-base md:text-lg leading-relaxed text-muted-foreground">
                Creemos que cada persona tiene talentos únicos para aportar al mundo. Desde PlanBee trabajamos con amor, profesionalismo y convicción para crear oportunidades reales de inserción, acompañando trayectorias personales con respeto y empatía.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Galería de Fotos */}
        <Reveal delay={0.2}>
          <div className="flex flex-row items-center gap-4 sm:gap-6">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-soft hover-lift">
              <Image
                src="/images/team/08.png" 
                alt="Miembros del equipo de PlanBee en el taller"
                width={220}
                height={340}
                priority
                quality={90}
                className="h-72 sm:h-80 w-auto object-cover object-center"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-soft hover-lift mt-6 sm:mt-8">
              <Image
                src="/images/team/07.png" 
                alt="Elaboración de productos en PlanBee"
                width={220}
                height={340}
                priority
                quality={90}
                className="h-72 sm:h-80 w-auto object-cover object-center"
              />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default AboutUs;