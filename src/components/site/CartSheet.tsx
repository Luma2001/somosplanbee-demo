'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2, Sparkles } from 'lucide-react';
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
      <SheetContent side="right" className="flex w-full flex-col gap-0 bg-card text-card-foreground sm:max-w-md">
        <SheetHeader className="px-1 pt-2 pb-4 border-b border-border">
          <SheetTitle className="font-display text-xl font-bold text-foreground">
            Tu pedido
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-1 py-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Todavía no agregaste productos. Explorá el catálogo para empezar.
            </p>
          ) : (
            <ul className="space-y-3">
              {items.map((item: CartItem) => (
                <li
                  key={item.code}
                  className="flex gap-3 rounded-2xl border border-border bg-background p-3 shadow-xs"
                >
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-secondary">
                    <Image
                      src={item.image}
                      alt={`Producto ${item.name}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-foreground text-sm">{item.name}</p>
                    <p className="truncate text-xs text-muted-foreground">CÓD: {item.code}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8 rounded-lg border-border"
                        onClick={() => updateQuantity(item.code, item.quantity - 1)}
                        aria-label={`Quitar una unidad de ${item.name}`}
                      >
                        <Minus aria-hidden="true" className="size-3.5" />
                      </Button>
                      <span className="w-8 text-center text-sm font-semibold tabular-nums" aria-live="polite">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8 rounded-lg border-border"
                        onClick={() => updateQuantity(item.code, item.quantity + 1)}
                        aria-label={`Agregar una unidad de ${item.name}`}
                      >
                        <Plus aria-hidden="true" className="size-3.5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto size-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeFromCart(item.code)}
                        aria-label={`Eliminar ${item.name} del pedido`}
                      >
                        <Trash2 aria-hidden="true" className="size-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <form className="mt-6 space-y-4" onSubmit={handleCheckout} noValidate>
              <div className="flex items-center gap-2 rounded-2xl border border-honey-deep/20 bg-accent p-3.5 text-sm font-medium text-accent-foreground">
                <Sparkles className="size-4 shrink-0 text-honey-deep" aria-hidden="true" />
                <p>
                  Con tu compra estás garantizando <strong className="font-bold text-foreground">{hours} horas</strong> de empleo inclusivo este mes.
                </p>
              </div>

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
                <Label htmlFor="cart-notes" className="text-foreground">Observaciones (opcional)</Label>
                <Textarea
                  id="cart-notes"
                  value={customer.notes}
                  maxLength={500}
                  onChange={(e) => setCustomer((c) => ({ ...c, notes: e.target.value }))}
                  className="rounded-xl border-input bg-background"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full min-h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-xs"
              >
                {whatsappCheckout.label}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full min-h-11 text-muted-foreground hover:text-foreground"
                onClick={clearCart}
              >
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
      <Label htmlFor={id} className="text-foreground">{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        maxLength={120}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="rounded-xl border-input bg-background"
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