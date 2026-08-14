'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { generateWhatsAppLink } from '@/utils/whatsapp';

// Helper para detectar si estamos en el navegador sin provocar renderizados en cascada
const emptySubscribe = () => () => {};
function useIsHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

/** Panel lateral deslizante del carrito de compras (Drawer). */
export function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const [customNotes, setCustomNotes] = useState('');
  const isHydrated = useIsHydrated();

  // Rehidratar Zustand solo cuando se monta en el cliente
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  // Bloquear el scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isHydrated || !isOpen) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const whatsappUrl = generateWhatsAppLink(cart, customNotes);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-heading"
    >
      {/* Backdrop click para cerrar */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} aria-hidden="true" />

      <aside className="relative z-10 flex h-full w-full max-w-md flex-col bg-card p-6 shadow-var(--shadow-lift) text-card-foreground">
        {/* Header del Carrito */}
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5 text-honey-deep" />
            <h2 id="cart-heading" className="font-display text-xl font-bold text-foreground">
              Tu Pedido ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar pedido"
            className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground focus:outline-hidden cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Lista de productos */}
        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="size-16 text-muted-foreground/40" />
            <p className="text-lg font-medium text-muted-foreground">Tu pedido está vacío</p>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-honey-deep px-6 py-2.5 font-semibold text-primary hover:bg-honey-deep/90 transition-all cursor-pointer"
            >
              Explorar Catálogo
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.code}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background p-3 shadow-xs"
                >
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-secondary">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">{item.code}</p>

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.code, item.quantity - 1)}
                        className="flex size-6 items-center justify-center rounded bg-secondary text-xs font-bold text-secondary-foreground hover:bg-muted cursor-pointer"
                        aria-label={`Reducir cantidad de ${item.name}`}
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.code, item.quantity + 1)}
                        className="flex size-6 items-center justify-center rounded bg-secondary text-xs font-bold text-secondary-foreground hover:bg-muted cursor-pointer"
                        aria-label={`Aumentar cantidad de ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.code)}
                    className="p-1 text-muted-foreground hover:text-destructive cursor-pointer"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Notas opcionales & Checkout por WhatsApp */}
            <div className="border-t border-border pt-4 space-y-4">
              <div>
                <label htmlFor="custom-notes" className="block text-xs font-medium text-foreground mb-1">
                  ¿Quieres agregar el logo de tu empresa o alguna nota?
                </label>
                <textarea
                  id="custom-notes"
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Ej: Necesitamos 20 unidades grabadas con el logo..."
                  className="w-full rounded-xl border border-input bg-background p-2.5 text-xs text-foreground focus:border-olive focus:outline-hidden"
                />
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-white hover:bg-[#20bd5a] transition-all shadow-md"
              >
                <MessageCircle className="size-5 fill-current" />
                Pedir Presupuesto por WhatsApp
                <ArrowRight className="size-4" />
              </a>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-muted-foreground hover:underline cursor-pointer"
              >
                Vaciar pedido
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}