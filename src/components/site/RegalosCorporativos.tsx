import { Reveal } from '@/components/site/Reveal';
import { CustomProductsCarousel } from '@/components/site/CustomProductsCarousel';

export const RegalosCorporativos = () => {
  return (
    <section
      aria-label="Regalos corporativos con impacto social"
      className="container-page py-2 md:py-4"
    >
      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Columna de Texto Informativo (En desktop se ordena a la derecha con order-2 si se prefiere, o a la izquierda) */}
          <div className="flex flex-col justify-center text-left lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-olive">
              Merchandising sustentable
            </span>
            
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance-tight">
              Regalos corporativos que cuentan una historia
            </h2>
            
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Producimos merchandising artesanal para empresas que quieren
              regalar algo que se use, que dure y que además sostenga empleo
              inclusivo real.
            </p>
          </div>

          {/* Columna del Carrusel de Productos (min-w-0 previene desbordes) */}
          <div className="w-full min-w-0 overflow-hidden lg:order-1">
            <CustomProductsCarousel />
          </div>

        </div>
      </Reveal>
    </section>
  );
};

export default RegalosCorporativos;