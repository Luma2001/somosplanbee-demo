import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Plan Bee | Inclusión Laboral y Productos de Impacto",
    template: "%s | Plan Bee Mendoza",
  },
  description:
    "Proyecto de inclusión laboral que crea productos artesanales y merchandising sustentable mediante el trabajo digno y capacitaciones en Mendoza.",
  keywords: [
    "Inclusión laboral",
    "Merchandising sustentable",
    "Regalos empresariales Mendoza",
    "Upcycling",
    "Impacto social",
  ],
  authors: [{ name: "Plan Bee Org" }],
  openGraph: {
    title: "Plan Bee | Productos con Impacto Social y Ambiental",
    description: "Manos que crean, historias que integran. Descubre nuestro catálogo de merchandising sustentable.",
    url: "https://somosplanbee.com",
    siteName: "Plan Bee",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo de trabajo de Plan Bee Mendoza",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {/* <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#E2B13C] focus:text-black"
        >
          Saltar al contenido principal
        </a>         */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}