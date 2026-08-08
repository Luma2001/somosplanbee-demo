import { Reveal } from '@/components/site/Reveal'
import { CustomProductsCarousel } from '@/components/site/CustomProductsCarousel'

export const RegalosCorporativos = () => {
  return (
    <Reveal delay={0.1}>
    <div className='flex flex-row flex-wrap gap-4 md:gap-22 md:flex-row-reverse items-center justify-center my-10'>

        <div className="relative z-10  flex max-w-sm flex-col py-2 text-left">
            {/* <div className="mb-4 h-1 w-16 rounded-full bg-honey" /> */}
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight ">
            Regalos corporativos <br></br>que cuentan una historia
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Producimos merchandising artesanal para empresas que quieren regalar algo que se use,
            que dure y que además sostenga empleo inclusivo real.
            </p>
        </div>
        <div className=" max-w-xl">
            <CustomProductsCarousel />
        </div>

    </div>
    </Reveal>
  )
}
