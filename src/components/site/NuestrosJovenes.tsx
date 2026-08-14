import { Reveal } from "@/components/site/Reveal"
import { ImageMarqueeCarousel } from "./ImageMarqueeCarousel"
import { TEAM_1 } from "@/data/content"

const NuestrosJovenes = () => {
  return (
      <section className="container-page">
        <Reveal>
          <div className="surface-card relative overflow-hidden rounded-3xl p-8 md:p-12 flex flex-row flex-wrap gap-4 justify-between">
            <div className="max-w-md space-y-4">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">
                Auténticos, creativos y con mucho corazón
              </h2>
              <p className="text-lg pt-4 leading-relaxed text-muted-foreground">
                Detrás de PlanBee hay personas creativas, inquietas y con muchas ganas de trabajar, que creen que las pequeñas ideas pueden generar grandes cambios.
              </p>
              <p className="text-lg pt-4 leading-relaxed text-muted-foreground">
                Nos gusta trabajar con las manos, crear redes y compartir lo que vamos aprendiendo en el camino.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                No somos perfectos (ni lo buscamos), pero sí auténticos. Acá estamos, creciendo de a poco, con trabajo en equipo y mucho corazón.
              </p>
            </div>
            <div className="max-w-lg">
                <ImageMarqueeCarousel
                items={TEAM_1}
                ariaLabel="Fotos del equipo de PlanBee"
                itemClassName="h-80 w-60 md:h-96 md:w-72" // Contenedor vertical (retrato)
                objectFit="object-top" 
                />
            </div>
          </div>

        </Reveal>




      </section>
  )
}

export default NuestrosJovenes
