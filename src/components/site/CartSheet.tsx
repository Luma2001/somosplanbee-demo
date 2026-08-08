'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCartStore, type CartItem } from '@/store/useCartStore';
import { impactHours, whatsappCheckout, type CustomerData } from '@/lib/checkout';
import { toast } from 'sonner';

const EMPTY: CustomerData = { name: '', email: '', phone: '', notes: '' };

export function CartSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  // Mapeamos state.cart a items para mantener la consistencia del resto del componente
  const items = useCartStore((state) => state.cart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [customer, setCustomer] = useState<CustomerData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerData, string>>>({});

  const hours = impactHours(items);

  function validate(): boolean {
    const next: Partial<Record<keyof CustomerData, string>> = {};
    if (customer.name.trim().length < 2) next.name = 'Ingresá tu nombre completo.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(customer.email.trim()))
      next.email = 'Ingresá un email válido.';
    if (customer.phone.trim().length < 6) next.phone = 'Ingresá un teléfono de contacto.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleCheckout(event: React.FormEvent) {
    event.preventDefault();
    if (items.length === 0) return;
    if (!validate()) return;

    whatsappCheckout.checkout({ lines: items, customer });
    toast.success('Pedido enviado a WhatsApp', {
      description: 'Te respondemos a la brevedad para coordinar el envío.',
    });
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader className="px-1 pt-2 pb-4 border-b border-border">
          <SheetTitle className="font-display text-xl">Tu pedido</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-1 py-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Todavía no agregaste productos. Explorá el catálogo para empezar.
            </p>
          ) : (
            <ul className="space-y-3">
              {items.map((item: CartItem) => (
                <li key={item.code} className="flex gap-3 rounded-2xl border border-border p-3">
                  <div className="relative size-18 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={item.image}
                      alt={`Producto ${item.name}`}
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{item.name}</p>
                    <p className="truncate text-xs text-muted-foreground">CÓD: {item.code}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="min-h-9 min-w-9"
                        onClick={() => updateQuantity(item.code, item.quantity - 1)}
                        aria-label={`Quitar una unidad de ${item.name}`}
                      >
                        <Minus aria-hidden="true" className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center tabular-nums text-sm font-medium" aria-live="polite">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="min-h-9 min-w-9"
                        onClick={() => updateQuantity(item.code, item.quantity + 1)}
                        aria-label={`Agregar una unidad de ${item.name}`}
                      >
                        <Plus aria-hidden="true" className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto min-h-9 min-w-9 text-muted-foreground hover:text-destructive"
                        onClick={() => removeFromCart(item.code)}
                        aria-label={`Eliminar ${item.name} del pedido`}
                      >
                        <Trash2 aria-hidden="true" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <form className="mt-6 space-y-4" onSubmit={handleCheckout} noValidate>
              <p className="rounded-2xl bg-accent px-4 py-3 text-sm font-medium text-accent-foreground">
                Con tu compra estás garantizando {hours} horas de empleo inclusivo este mes.
              </p>

              <Field
                id="cart-name"
                label="Nombre y apellido"
                value={customer.name}
                error={errors.name}
                onChange={(v) => setCustomer((c) => ({ ...c, name: v }))}
                autoComplete="name"
              />
              <Field
                id="cart-email"
                label="Email"
                type="email"
                value={customer.email}
                error={errors.email}
                onChange={(v) => setCustomer((c) => ({ ...c, email: v }))}
                autoComplete="email"
              />
              <Field
                id="cart-phone"
                label="Teléfono"
                type="tel"
                value={customer.phone}
                error={errors.phone}
                onChange={(v) => setCustomer((c) => ({ ...c, phone: v }))}
                autoComplete="tel"
              />

              <div className="space-y-1.5">
                <Label htmlFor="cart-notes">Observaciones (opcional)</Label>
                <Textarea
                  id="cart-notes"
                  value={customer.notes}
                  maxLength={500}
                  onChange={(e) => setCustomer((c) => ({ ...c, notes: e.target.value }))}
                />
              </div>

              <Button type="submit" size="lg" className="w-full min-h-12 font-semibold">
                {whatsappCheckout.label}
              </Button>
              <Button type="button" variant="ghost" className="w-full min-h-11" onClick={clearCart}>
                Vaciar carrito
              </Button>
            </form>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        maxLength={120}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        required
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}