/** Contenido editorial: historias, métricas, aliados y proceso creativo. */

export interface Story {
  id: string;
  name: string;
  role: string;
  quote: string;
  text: string;
}

export const STORIES: readonly Story[] = [
  {
    id: 'lucia',
    name: 'Lucía',
    role: 'Marroquinería y armado final',
    quote: 'Acá aprendí que equivocarme era parte de aprender.',
    text: 'Llegó al taller sin experiencia en costura. Hoy arma la línea completa de portadocumentos y capacita a quienes ingresan.',
  },
  {
    id: 'marcos',
    name: 'Marcos',
    role: 'Serigrafía e ilustración',
    quote: 'Cada tirada es distinta y eso me gusta.',
    text: 'Coordina la impresión de los textiles ilustrados junto a artistas locales y controla la calidad de cada tirada.',
  },
  {
    id: 'ana',
    name: 'Ana',
    role: 'Corte y sistemas modulares',
    quote: 'Lo que para otros es descarte, para mí es materia prima.',
    text: 'Diseñó el sistema de aprovechamiento de retazos que hoy permite que el taller trabaje con desperdicio casi cero.',
  },
] as const;

//----------------------------------

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
}

export const METRICS: readonly Metric[] = [
  { label: 'Personas integradas', value: 24 },
  { label: 'Horas de taller', value: 12400, suffix: '+' },
  { label: 'Productos fabricados', value: 8600, suffix: '+' },
  { label: 'Historias reales', value: 24 },
] as const;

//----------------------------------

export interface Partner {
  name: string;
  logoSrc: string;
}

export const PARTNERS: readonly Partner[] = [
  {
   name: 'Mendoza Ciudad',
   logoSrc: '/images/partners/mendoza-ciudad.png',
  },
  {
   name: 'Susana Balbo',
    logoSrc: '/images/partners/susana-balbo.png',
  },
  {
   name: 'TerraDonna',
    logoSrc: '/images/partners/terradona.png',
  },
  {
    name: 'Instituto',
    logoSrc: '/images/partners/instituto.png',
  },
  {
    name: 'Entre Dos',
    logoSrc: '/images/partners/entredos.png',
  },
    {
    name: 'La Gloria',
    logoSrc: '/images/partners/lagloria.png',
  },
  {
    name: 'UNCUYO',
    logoSrc: '/images/partners/uncuyoi.png',
  },
  {
    name: 'HYATT',
    logoSrc: '/images/partners/hyatt.png',
  },
  {
    name: 'Mujeres',
    logoSrc: '/images/partners/mujeres.png',
  },
  {
    name: 'Economía Social',
    logoSrc: '/images/partners/economia-social.png',
  },
  {
    name: 'De mi campo',
    logoSrc: '/images/partners/de-mi-campo.png',
  },
  {
    name: 'Cosa Nuestra',
    logoSrc: '/images/partners/cosa-nuestra.png',
  },
] as const;

//----------------------------------

export interface CustomProduct {
  id: string;
  title: string;
  imageSrc: string;
}

export const CUSTOM_PRODUCTS: readonly CustomProduct[] = [
  {
    id: 'b2bEntreDos',
    title: 'Bolsa personalizadas con serigrafía corporativa',
    imageSrc: '/images/products/b2bEntreDos.png',
  },
  {
    id: 'llavero-picabuey',
    title: 'Llaveros de duelas de barricas de vino recicladas',
    imageSrc: '/images/products/llavero-duelas.png',
  },
  {
    id: 'llavero-Rosendo',
    title: 'Llaveros de duelas de barricas de vino recicladas',
    imageSrc: '/images/products/llavero-duelas2.png',
  },
  {
    id: 'portadoc-unc',
    title: 'Portadocumentos personalizados',
    imageSrc: '/images/products/portadocumentos.png',
  },
  {
    id: 'portacosasEntreDos',
    title: 'Portacosas personalizados',
    imageSrc: '/images/products/portacosas.png',
  },
  {
    id: 'portalentes-santander',
    title: 'Portalentes personalizados',
    imageSrc: '/images/products/portalentes2.png',
  },
  

] as const;

//----------------------------------

export interface TeamProps {
  id: string;
  title: string;
  imageSrc: string;
}

export const TEAM_1: readonly TeamProps[] = [
  {
    id: 'lucia',
    title: 'Lucía',
    imageSrc: '/images/team/03.png',
  },
  {
    id: 'marcos',
    title: 'Marcos',
    imageSrc: '/images/team/04.png',
  },
  {
    id: 'ana',
    title: 'Ana',
    imageSrc: '/images/team/05.png',
  },
  {
    id: 'luna',
    title: 'Luna',
    imageSrc: '/images/team/06.png',
  },
  {
    id: 'marcelo',
    title: 'Marcelo',
    imageSrc: '/images/team/07.png',
  },
  {
    id: 'linda',
    title: 'Linda',
    imageSrc: '/images/team/08.png',
  },
  

] as const;

//----------------------------------

export const TEAM_2: readonly TeamProps[] = [
  {
    id: 'lucia',
    title: 'Lucía',
    imageSrc: '/images/team/01.png',
  },
  {
    id: 'marcos',
    title: 'Marcos',
    imageSrc: '/images/team/02.jpeg',
  },
  {
    id: 'ana',
    title: 'Ana',
    imageSrc: '/images/team/09.png',
  },
  {
    id: 'luna',
    title: 'Luna',
    imageSrc: '/images/team/10.png',
  },
  {
    id: 'marcelo',
    title: 'Marcelo',
    imageSrc: '/images/team/11.png',
  },
  {
    id: 'linda',
    title: 'Linda',
    imageSrc: '/images/team/12.png',
  },
    {
    id: 'linda',
    title: 'Linda',
    imageSrc: '/images/team/13.png',
  }
  

] as const;

//----------------------------------

export interface Benefit {
  title: string;
  text: string;
}

export const BENEFITS: readonly Benefit[] = [
  {
    title: 'Triple Impacto Certificado',
    text: 'Tus compras generan impacto ambiental mediante el reciclaje de lonas publicitarias e impacto social dando empleo a personas con discapacidad.',
  },
  {
    title: 'Personalización Corporativa',
    text: 'Agregamos la identidad de tu empresa o evento mediante serigrafía, bordados o etiquetas personalizadas de alta calidad.',
  },
  {
    title: 'Durabilidad Garantizada',
    text: 'Diseñamos productos pensados para el uso diario e intensivo, asegurando que tu marca acompañe a tus clientes por mucho tiempo.',
  },
  {
    title: 'Medición de Impacto',
    text: 'Te entregamos un reporte con los kilos de plástico reciclado y las horas de trabajo inclusivo generadas por tu pedido.',
  },
] as const;

//----------------------------------

export interface CaseStudy {
  client: string;
  text: string;
}

export const CASES: readonly CaseStudy[] = [
  {
    client: 'Bodega Susana Balbo',
    text: 'Desarrollo de merchandising sustentable exclusivo para visitas guiadas y eventos.',
  },
  {
    client: 'Ciudad de Mendoza',
    text: 'Kits de fin de año en marroquinería recuperada para equipo y clientes.',
  },
  {
    client: 'UNCuyo',
    text: 'Confección de mochilas y cartucheras institucionales elaboradas a partir de la recuperación de banners de eventos públicos.',
  },{
    client: 'Picabuey',
    text: 'Línea de accesorios de marca producida en series cortas.',
  },
] as const;

//----------------------------------


export interface ProcessStep {
  step: number;
  title: string;
  text: string;
}

export const PROCESS: readonly ProcessStep[] = [
  {
    step: 1,
    title: 'Recolección',
    text: 'Recuperamos lonas, cueros, maderas y textiles que iban a descarte industrial.',
  },
  {
    step: 2,
    title: 'Clasificación',
    text: 'Cada material se limpia, mide y clasifica según resistencia, color y destino posible.',
  },
  {
    step: 3,
    title: 'Diseño modular',
    text: 'Diseñamos piezas que se combinan entre sí: un mismo módulo alimenta varios productos.',
  },
  {
    step: 4,
    title: 'Costura en parrilla',
    text: 'Técnica propia de costura por estaciones que permite que cada persona aporte desde su fortaleza.',
  },
  {
    step: 5,
    title: 'Producto terminado',
    text: 'Control de calidad, firma de quien lo hizo y salida al mundo con su historia adjunta.',
  },
] as const;

//----------------------------------

export interface JourneyItem {
  title: string;
  text: string;
}

export const JOURNEY: readonly JourneyItem[] = [
  { title: 'Materia prima', text: 'Descarte industrial recuperado en Mendoza.' },
  { title: 'Proceso', text: 'Clasificación, diseño modular y costura en parrilla.' },
  { title: 'Equipo', text: 'Personas con discapacidad en empleo formal y acompañado.' },
  { title: 'Producto', text: 'Piezas únicas, firmadas y pensadas para durar.' },
  { title: 'Cliente', text: 'Personas y empresas que eligen calidad con impacto.' },
] as const;

//----------------------------------

export const PHILOSOPHY: readonly string[] = [
  'Aerodinámicamente el cuerpo de la abeja no está hecho para volar… lo bueno es que ella no lo sabe.',
  'Resignificamos el error como parte del proceso creativo.',
] as const;

export interface SustainabilityItem {
  title: string;
  text: string;
}

export const SUSTAINABILITY: readonly SustainabilityItem[] = [
  { title: 'Upcycling', text: 'Elevamos el material descartado a producto de diseño, sin degradarlo.' },
  { title: 'Economía circular', text: 'El residuo de una industria es la materia prima de la siguiente.' },
  { title: 'Design Thinking', text: 'Prototipamos con el equipo: quien produce también diseña.' },
  { title: 'Costura en parrilla', text: 'Estaciones de trabajo que adaptan la tarea a cada persona.' },
  { title: 'Sistemas modulares', text: 'Piezas intercambiables que alargan la vida útil del producto.' },
  { title: 'Error creativo', text: 'El desvío no se descarta: se convierte en una variante nueva.' },
] as const;

//----------------------------------