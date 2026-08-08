'use client';

import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categoryName, type Product } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      code: product.id,
      name: product.name,
      category: product.category,
      image: product.images[0],
      quantity: 1,
    });
    toast.success(`${product.name} agregado a tu carrito`);
  };

  return (
    <article className="surface-card hover-lift group flex flex-col justify-between overflow-hidden">
      {/* Área interactiva principal que abre el modal */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-label={`Ver detalle de ${product.name}`}
      >
        <div className="relative aspect-square w-full overflow-hidden bg-secondary">
          <Image
            src={product.images[0]}
            alt={`${product.name} - ${product.material}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-full bg-ivory/90 px-3 py-1 text-xs font-semibold text-graphite shadow-sm backdrop-blur-xs">
            {product.id}
          </span>
        </div>

        <div className="p-5">
          <span className="text-xs font-medium uppercase tracking-wider text-olive">
            {categoryName(product.category)}
          </span>
          <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.material}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.badges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-2 px-5 pb-5 pt-2">
        <Button
          className="min-h-11 flex-1 font-semibold"
          onClick={handleAddToCart}
        >
          Agregar
        </Button>
        <Button
          variant="outline"
          className="min-h-11"
          onClick={() => setOpen(true)}
        >
          Ver detalle
        </Button>
      </div>

      {/* Modal accesible de detalle */}
      <ProductDialog product={product} open={open} onOpenChange={setOpen} />
    </article>
  );
}

function ProductDialog({
  product,
  open,
  onOpenChange,
}: {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-3xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Galería de Imágenes */}
          <div className="space-y-3">
            {product.images.map((src, index) => (
              <div key={`${product.id}-${index}`} className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={src}
                  alt={`${product.name} — vista ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Detalles e Historia del Producto */}
          <div className="flex flex-col justify-between">
            <div>
              <DialogTitle className="font-display text-2xl font-bold">{product.name}</DialogTitle>
              <DialogDescription className="mt-2 text-sm text-muted-foreground">
                {product.description}
              </DialogDescription>

              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground">Materiales:</dt>
                  <dd className="text-muted-foreground">{product.material}</dd>
                </div>
                {product.measures && (
                  <div className="flex gap-2">
                    <dt className="font-semibold text-foreground">Medidas:</dt>
                    <dd className="text-muted-foreground">{product.measures}</dd>
                  </div>
                )}
                {product.story && (
                  <div className="flex gap-2">
                    <dt className="font-semibold text-foreground">Historia:</dt>
                    <dd className="text-muted-foreground">{product.story}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {product.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>

              <ul className="mt-5 space-y-1 text-sm text-muted-foreground">
                {product.customizable && <li>✓ Apto para personalización empresarial / logo.</li>}
                <li>✓ Confección artesanal e inclusión laboral.</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-2 pt-4">
              <Button
                size="lg"
                className="min-h-12 w-full font-semibold"
                onClick={() => {
                  addToCart({
                    code: product.id,
                    name: product.name,
                    category: product.category,
                    image: product.images[0],
                    quantity: 1,
                  });
                  toast.success(`${product.name} agregado a tu pedido`);
                  onOpenChange(false);
                }}
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}