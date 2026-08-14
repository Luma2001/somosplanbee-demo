import { whatsappLink } from '@/lib/site'
import { Reveal } from './Reveal'
import { Button } from '../ui/button'
import Link from 'next/link'

export const ComoAyudar = () => {
  return (
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Comprar productos",
              text: "Cada compra sostiene horas de taller. También producimos regalos corporativos a medida.",
              cta: "Ver catálogo",
              to: "/catalogo" as const,
            },
            {
              title: "Donar",
              text: "Aportes puntuales o mensuales que financian capacitación, herramientas y materiales.",
              cta: "Quiero donar",
              href: whatsappLink("Hola PlanBee, quiero hacer una donación."),
            },
            {
              title: "Voluntariado",
              text: "Sumá tu tiempo o tu oficio: diseño, comunicación, logística o acompañamiento en el taller.",
              cta: "Sumarme",
              href: whatsappLink("Hola PlanBee, quiero sumarme como voluntario/a."),
            },
          ].map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className="h-full">
              <article className="surface-card hover-lift flex h-full flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-honey">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{card.text}</p>
                {card.to ? (
                  <Button asChild className="mt-5 min-h-11">
                    <Link href={card.to}>{card.cta}</Link>
                  </Button>
                ) : (
                  <Button asChild className="mt-5 min-h-11">
                    <a href={card.href} target="_blank" rel="noreferrer">
                      {card.cta}
                    </a>
                  </Button>
                )}
              </article>
            </Reveal>
          ))}
        </div>
  )
}
