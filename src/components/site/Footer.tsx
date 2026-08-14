import Link from 'next/link';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/site';
import { Logo } from '@/components/site/logo';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-secondary/60 text-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        
        {/* Columna 1: Identidad & Resumen */}
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Asociación civil dedicada a la inclusión laboral a través del diseño y la fabricación
            artesanal con materiales recuperados.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <nav aria-label="Enlaces del sitio">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Sitio
          </h2>
          <ul className="mt-4 space-y-1.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block py-1 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Columna 3: Contacto & Redes */}
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 shrink-0 text-olive" aria-hidden="true" />
              <a
                href={whatsappLink('Hola PlanBee, quiero hacer una consulta.')}
                className="py-1 underline-offset-4 hover:text-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
                <span className="sr-only"> (abre en una nueva pestaña)</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-olive" aria-hidden="true" />
              <a
                href={`mailto:${SITE.email}`}
                className="py-1 underline-offset-4 hover:text-foreground hover:underline"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2 py-1">
              <MapPin className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden="true" />
              <span>{SITE.address}</span>
            </li>
          </ul>

          {/* Redes Sociales con área táctil accesible de 44x44px */}
          <div className="mt-4 flex gap-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de PlanBee (abre en una nueva pestaña)"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-background hover:text-honey-deep shadow-2xs"
            >
              <FaInstagram className="size-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube de PlanBee (abre en una nueva pestaña)"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-background hover:text-honey-deep shadow-2xs"
            >
              <FaYoutube className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Columna 4: Mapa Embebido */}
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Dónde estamos
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted shadow-2xs">
            <iframe
              title="Ubicación del taller de PlanBee en Montecaseros 1486, Mendoza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.7700181745276!2d-68.83397752576391!3d-32.886392268845256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09ad76329f53%3A0x5369bf7f5babaa15!2sPlanBee!5e1!3m2!1ses!2sar!4v1786215118592!5m2!1ses!2sar"
              className="h-44 w-full border-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      {/* Barra Inferior de Copyright */}
      <div className="border-t border-border/80 bg-background/30">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Hecho a mano en Mendoza.
          </p>
          <p>Sitio accesible según WCAG 2.1 nivel AA.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;