import Link from 'next/link';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/site';
import { Logo } from '@/components/site/logo';

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-secondary/60">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Logo/>

          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Asociación civil dedicada a la inclusión laboral a través del diseño y la fabricación
            artesanal con materiales recuperados.
          </p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Sitio</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contacto</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden="true" />
              <a
                href={whatsappLink('Hola PlanBee, quiero hacer una consulta.')}
                className="underline-offset-4 hover:text-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden="true" />
              <a
                href={`mailto:${SITE.email}`}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden="true" />
              <span>{SITE.address}</span>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de PlanBee"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
            >
              <FaInstagram className="size-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube de PlanBee"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
            >
              <FaYoutube className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* <div className="space-y-3">
            <h3 className="font-display text-base font-semibold text-foreground">
              Ubicación del Taller
            </h3>
            <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-border/80 shadow-sm">
              <iframe
                title="Ubicación de PlanBee en Google Maps"
                // Reemplaza esta URL con la que obtienes en "Incorporar mapa" de Google Maps
                src="https://maps.app.goo.gl/FzFbfkrDLpatZz157"
                width="100%"
                height="100%"
                className="border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/FzFbfkrDLpatZz157"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-honey-deep hover:underline"
            >
              <MapPin className="size-3.5" />
              Abrir en Google Maps
            </a>
        </div> */}



        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Dónde estamos</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-muted">
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

      <div className="border-t border-border">
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