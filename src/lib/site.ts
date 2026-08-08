/**
 * Configuración institucional de PlanBee.
 * Punto único de verdad para datos de contacto y textos globales.
 * TODO: reemplazar el número de WhatsApp por el definitivo.
 */
export const SITE = {
  name: "Asociación PlanBee",
  shortName: "PlanBee",
  tagline: "Productos con Impacto Real",
  description:
    "PlanBee fabrica productos artesanales y sustentables con materiales recuperados, generando empleo inclusivo real. Catálogo, regalos corporativos e impacto social.",
  /** Número en formato internacional sin signos, para enlaces wa.me */
  whatsapp: "5492615867159",
  email: "hola@somosplanbee.com",
  city: "Mendoza, Argentina",
  address: "Montecaseros 1486, Ciudad de Mendoza",
  googleMapsUrl: "https://maps.app.goo.gl/FzFbfkrDLpatZz157",
  instagram: "https://www.instagram.com/plan.bee.mza/",
  youtube: "https://www.youtube.com/",
  /** Horas de empleo inclusivo garantizadas por cada producto vendido */
  hoursPerProduct: 3,
} as const;

/** Construye un enlace de WhatsApp con mensaje pre-cargado. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** 
 * Enlaces de navegación adaptados para Next.js App Router (usando 'href').
 */
export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/empresas", label: "Empresas" },
  { href: "/impacto", label: "Impacto" },
  { href: "/contacto", label: "Contacto" },
] as const;