import { Reveal } from '@/components/site/Reveal';
import { ImageMarqueeCarousel } from '@/components/site/ImageMarqueeCarousel';
import { TEAM_1 } from '@/data/content';

export const NuestrosJovenes = () => {
  return (
    <section
      aria-label="Sobre el equipo de jóvenes de PlanBee"
      className="container-page py-12 md:py-16"
    >
      <Reveal>
        <div className="surface-card relative overflow-hidden rounded-3xl p-8 sm:p-10 md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* Columna de Texto */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl text-balance-tight">
                Auténticos, creativos y con mucho corazón
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Detrás de PlanBee hay personas creativas, inquietas y con muchas
                  ganas de trabajar, que creen que las pequeñas ideas pueden generar
                  grandes cambios.
                </p>
                <p>
                  Nos gusta trabajar con las manos, crear redes y compartir lo que
                  vamos aprendiendo en el camino.
                </p>
                <p>
                  No somos perfectos (ni lo buscamos), pero sí auténticos. Acá
                  estamos, creciendo de a poco, con trabajo en equipo y mucho
                  corazón.
                </p>
              </div>
            </div>

            {/* Columna de Galería (min-w-0 previene flex-blowout) */}
            <div className="w-full min-w-0 overflow-hidden">
              <ImageMarqueeCarousel
                items={TEAM_1}
                ariaLabel="Fotos del equipo y jóvenes de PlanBee"
                itemClassName="h-80 w-60 sm:h-96 sm:w-72"
                objectFit="object-top"
              />
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default NuestrosJovenes;