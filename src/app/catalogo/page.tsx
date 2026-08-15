'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/site/ProductCard';
import { Reveal } from '@/components/site/Reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CATEGORIES, PRODUCTS, type CategorySlug } from '@/data/products';
import { Hero } from '@/components/site/Hero';

export default function CatalogoPage() {
  const [category, setCategory] = useState<CategorySlug | 'todos'>('todos');
  const [query, setQuery] = useState('');

  const products = useMemo(() => {
    const term = query.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (category === 'todos' || p.category === category) &&
        (term === '' ||
          p.name.toLowerCase().includes(term) ||
          p.material.toLowerCase().includes(term)),
    );
  }, [category, query]);

  return (
    <div className="flex flex-col gap-6 pb-10 md:gap-8 md:pb-12">
      {/* Hero Principal */}
      <Hero
        variant="background"
        title="Catálogo de productos"
        description="Diseñamos y creamos productos únicos, elaborados en nuestro taller por los jóvenes. Cada objeto cuenta una historia y refleja una habilidad, generando recursos que impulsan nuestros proyectos."
        bgAlt="Jóvenes de PlanBee elaborando y exhibiendo productos sustentables"
        bgImageUrl="/images/backgrounds/productos-bg.png"
        showDivider1={false}
      />

      <div className="container-page">
        {/* Controles de Búsqueda y Filtros */}
        <section
          aria-label="Filtros y búsqueda de catálogo"
          className="flex flex-col gap-6"
        >
          <div className="max-w-md">
            <Label htmlFor="buscar-producto" className="text-foreground">
              Buscar producto
            </Label>
            <Input
              id="buscar-producto"
              type="search"
              value={query}
              maxLength={60}
              placeholder="Ej: tote, billetera, madera..."
              onChange={(e) => setQuery(e.target.value)}
              className="mt-1.5"
            />
          </div>

          <div
            role="group"
            aria-label="Filtrar por categoría"
            className="flex flex-wrap gap-2.5"
          >
            <FilterChip
              active={category === 'todos'}
              onClick={() => setCategory('todos')}
            >
              Todos
            </FilterChip>
            {CATEGORIES.map((c) => (
              <FilterChip
                key={c.slug}
                active={category === c.slug}
                onClick={() => setCategory(c.slug)}
              >
                {c.name}
              </FilterChip>
            ))}
          </div>
        </section>

        {/* Región de estado para lectores de pantalla */}
        <div className="mt-8 flex items-center justify-between">
          <p
            className="text-sm font-medium text-muted-foreground"
            aria-live="polite"
            aria-atomic="true"
          >
            {products.length === 0
              ? 'No se encontraron productos'
              : `${products.length} ${
                  products.length === 1
                    ? 'producto encontrado'
                    : 'productos encontrados'
                }`}
          </p>
        </div>

        {/* Grilla de Productos o Estado Vacío */}
        {products.length === 0 ? (
          <div className="surface-card mt-6 rounded-3xl p-10 text-center">
            <p className="text-base text-muted-foreground">
              No encontramos productos que coincidan con tu búsqueda o filtro.
            </p>
            <Button
              className="mt-5 min-h-11 shadow-xs"
              onClick={() => {
                setCategory('todos');
                setQuery('');
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        ) : (
          <ul
            aria-label="Listado de productos"
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
          >
            {products.map((product, index) => (
              <li key={product.id} className="flex">
                <Reveal
                  delay={Math.min(index, 6) * 0.05}
                  className="h-full w-full flex flex-col"
                >
                  <ProductCard product={product} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

interface FilterChipProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function FilterChip({ active, onClick, children }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        active
          ? 'border-transparent bg-primary text-primary-foreground shadow-2xs'
          : 'border-border bg-card text-foreground shadow-2xs hover:bg-secondary hover:border-border'
      }`}
    >
      {children}
    </button>
  );
}