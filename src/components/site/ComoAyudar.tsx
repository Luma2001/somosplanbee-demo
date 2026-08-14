import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/Reveal';
import { whatsappLink } from '@/lib/site';

interface HelpCard {
  title: string;
  text: string;
  cta: string;
  to?: string;
  href?: string;
}

const HELP_CARDS: HelpCard[] = [
  {
    title: 'Comprar productos',
    text: 'Cada compra sostiene horas de taller. También producimos regalos corporativos a medida.',
    cta: 'Ver catálogo',
    to: '/catalogo',
  },
  {
    title: 'Donar',
    text: 'Aportes puntuales o mensuales que financian capacitación, herramientas y materiales.',
    cta: 'Quiero donar',
    href: whatsappLink('Hola PlanBee, quiero hacer una donación.'),
  },
  {
    title: 'Voluntariado',
    text: 'Sumá tu tiempo o tu oficio: diseño, comunicación, logística o acompañamiento en el taller.',
    cta: 'Sumarme',
    href: whatsappLink('Hola PlanBee, quiero sumarme como voluntario/a.'),
  },
];

export const ComoAyudar = () => {
  // Clase unificada para los 3 botones
  const buttonStyles =
    'mt-6 w-full min-h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-xs';

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
      {HELP_CARDS.map((card, index) => (
        <Reveal
          key={card.title}
          delay={index * 0.08}
          className="h-full flex flex-col"
        >
          <article className="surface-card hover-lift flex flex-1 flex-col justify-between p-6 sm:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {card.text}
              </p>
            </div>

            {card.to ? (
              <Button asChild className={buttonStyles}>
                <Link href={card.to}>{card.cta}</Link>
              </Button>
            ) : (
              <Button asChild className={buttonStyles}>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${card.cta}: contactar por WhatsApp (abre en una nueva pestaña)`}
                >
                  {card.cta}
                  <span className="sr-only"> (abre en una nueva pestaña)</span>
                </a>
              </Button>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
};

export default ComoAyudar;