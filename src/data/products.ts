export type Badge = "Madera Recuperada" | "Textil Reciclado" | "Ilustración Local" | "Papelería Sustentable";

export type CategorySlug = "marroquineria" | "accesorios" | "papeleria";

export interface Category {
  slug: CategorySlug;
  name: string;
}

export interface Product {
  id: string; // Ej: 'COD. 001'
  name: string;
  category: CategorySlug;
  material: string;
  measures: string;
  description: string;
  story: string;
  badges: Badge[];
  images: string[];
  customizable: boolean;
}

export const CATEGORIES: Category[] = [
  { slug: "accesorios", name: "Accesorios" },
  { slug: "marroquineria", name: "Marroquinería" },
  { slug: "papeleria", name: "Papelería" },
];

export const PRODUCTS: Product[] = [
  {
    id: "COD. 001",
    name: "Llaveros de Duelas",
    category: "accesorios",
    material: "Madera recuperada de duelas, aro metálico",
    measures: "55 x 25 mm (aprox)",
    description:
      "Trabajados a partir de duelas en desuso que resignifican su historia. Devuelven una vez más al ruedo la historia impregnada en la viña y la tierra.",
    story:
      "Madera recuperada directamente de barricas vitivinícolas mendocinas en desuso, revalorizando la tradición de la región.",
    badges: ["Madera Recuperada"],
    images: ["/images/products/llavero-duelas.png"],
    customizable: true,
  },
  {
    id: "COD. 002",
    name: "Postales",
    category: "papeleria",
    material: "Cartulina / Papel de ilustración",
    measures: "18.5 x 12.5 cm (aprox)",
    description:
      "Postales en cartulina, con ilustraciones propias y/o de artistas mendocinos.",
    story:
      "Espacio de expresión artística local impreso sobre papel responsable para transmitir la cultura de Mendoza.",
    badges: ["Ilustración Local", "Papelería Sustentable"],
    images: ["/images/products/postales.png"],
    customizable: true,
  },
  {
    id: "COD. 003",
    name: "Sobre + Tote Bag",
    category: "marroquineria",
    material: "Textil reciclado, lienzo",
    measures: "30 x 42 cm (aprox)",
    description:
      "Bolsa de tela pocket ideal para uso diario o merchandising institucional.",
    story:
      "Diseñada para plegarse sobre su propio sobre, optimizando espacio y aprovechando retazos textiles de descarte.",
    badges: ["Textil Reciclado"],
    images: ["/images/products/tote-bag-pocket.png"],
    customizable: true,
  },
  {
    id: "COD. 004",
    name: "Tote Bag / Lienzo",
    category: "marroquineria",
    material: "Lienzo de algodón",
    measures: "30 x 42 cm (aprox)",
    description:
      "Bolsa de tela realizada en lienzo de algodón con estampa de la ilustradora @nella.gatica.",
    story:
      "Unión de producción textil artesanal e ilustración de autor para crear piezas reutilizables de alta durabilidad.",
    badges: ["Textil Reciclado", "Ilustración Local"],
    images: ["/images/products/tote-bag-lienzo.png"],
    customizable: true,
  },
  {
    id: "COD. 005",
    name: "Portalentes",
    category: "accesorios",
    material: "Retazos textiles, cuero recuperado",
    measures: "17 x 7 cm (aprox)",
    description:
      "Proyecto asociativo. Realizado con retazos de la industria textil y aplicación de marca en cuero.",
    story:
      "Desarrollado en alianza con talleres locales para el aprovechamiento integral del descarte textil.",
    badges: ["Textil Reciclado"],
    images: ["/images/products/portalentes.png"],
    customizable: true,
  },
  {
    id: "COD. 006",
    name: "Portadocumentos",
    category: "accesorios",
    material: "Retazos textiles, cuero recuperado",
    measures: "24 x 15 cm (aprox)",
    description:
      "Proyecto asociativo. Realizado con retazos de la industria textil y aplicación de marca en cuero.",
    story:
      "Pieza de marroquinería ligera pensada para organizar pasaportes, vouchers o documentación de viaje y oficina.",
    badges: ["Textil Reciclado"],
    images: ["/images/products/portadocumentos.png"],
    customizable: true,
  },
  {
    id: "COD. 007",
    name: "Porta Celular",
    category: "accesorios",
    material: "Retazos textiles, cuero recuperado",
    measures: "18 x 10 cm (aprox)",
    description:
      "Proyecto asociativo. Realizado con retazos de la industria textil y aplicación de marca en cuero.",
    story:
      "Funda de protección cruzada fabricada a partir de recortes textiles seleccionados por textura y resistencia.",
    badges: ["Textil Reciclado"],
    images: ["/images/products/porta-celular.png"],
    customizable: true,
  },
  {
    id: "COD. 008",
    name: "Billetera",
    category: "accesorios",
    material: "Retazos textiles, cuero recuperado",
    measures: "11 x 9 cm (aprox)",
    description:
      "Proyecto asociativo. Realizado con retazos de la industria textil y aplicación de marca en cuero.",
    story:
      "Diseño compacto y duradero que transforma pequeños sobrantes de producción en un objeto de uso cotidiano.",
    badges: ["Textil Reciclado"],
    images: ["/images/products/billetera.png"],
    customizable: true,
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function categoryName(slug: CategorySlug): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}