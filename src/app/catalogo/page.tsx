'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/site/ProductCard';
import { Reveal } from '@/components/site/Reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CATEGORIES, PRODUCTS, type CategorySlug } from '@/data/products';
import { Hero } from '@/components/site/Hero';

export default function Catalogo() {
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
    <div className="flex flex-col gap-10 pb-10 md:gap-14">

      {/* Hero */}   
      <Hero 
        variant="background"
        title='Catálogo de productos'
        description='Diseñamos y creamos productos únicos, elaborados en nuestro taller por los jóvenes. Cada objeto cuenta una historia y refleja una habilidad, generando recursos que impulsan nuestros proyectos.'
        bgAlt='Nuestro jóvenes exhibiendo sus productos fabricados en PlanBee'
        bgImageUrl='/images/backgrounds/productos-bg.png'
        showDivider1 = { false }
      />
   
      <div className='container-page py-4'>
        {/* Búsqueda y Filtros */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="max-w-sm">
            <Label htmlFor="buscar">Buscar producto</Label>
            <Input
              id="buscar"
              type="search"
              value={query}
              maxLength={60}
              placeholder="Ej: tote, billetera, madera"
              onChange={(e) => setQuery(e.target.value)}
              className="mt-1.5"
            />
          </div>

          <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
            <FilterChip active={category === 'todos'} onClick={() => setCategory('todos')}>
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
        </div>

        {/* Contador de resultados */}
        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {products.length} {products.length === 1 ? 'producto' : 'productos'}
        </p>

        {/* Grilla de productos o estado vacío */}
        {products.length === 0 ? (
          <div className="surface-card mt-6 p-10 text-center">
            <p className="text-muted-foreground">
              No encontramos productos con ese filtro. Probá con otra categoría.
            </p>
            <Button
              className="mt-4 min-h-11"
              onClick={() => {
                setCategory('todos');
                setQuery('');
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={Math.min(index, 5) * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors ${
        active
          ? 'border-olive bg-primary text-primary-foreground'
          : 'border-border bg-card hover:bg-secondary'
      }`}
    >
      {children}
    </button>
  );
}