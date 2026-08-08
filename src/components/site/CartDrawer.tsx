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
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-heading"
    >
      {/* Backdrop click para cerrar */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} aria-hidden="true" />

      <aside className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#FDFBF7] p-6 shadow-2xl">
        {/* Header del Carrito */}
        <div className="flex items-center justify-between border-b border-[#F3EFE6] pb-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#E2B13C]" />
            <h2 id="cart-heading" className="text-xl font-bold text-[#222222]">
              Tu Pedido ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar pedido"
            className="rounded-full p-2 text-gray-500 hover:bg-[#F3EFE6] hover:text-black focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Lista de productos */}
        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300" />
            <p className="text-lg font-medium text-gray-600">Tu pedido está vacío</p>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[#E2B13C] px-6 py-2.5 font-semibold text-black hover:bg-[#C99B2D]"
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
                  className="flex items-center gap-4 rounded-xl border border-[#F3EFE6] bg-white p-3 shadow-xs"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-[#222222] text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.code}</p>

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.code, item.quantity - 1)}
                        className="h-6 w-6 rounded bg-[#F3EFE6] text-xs font-bold hover:bg-gray-300"
                        aria-label={`Reducir cantidad de ${item.name}`}
                      >
                        -
                      </button>
                      <span className="text-xs font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.code, item.quantity + 1)}
                        className="h-6 w-6 rounded bg-[#F3EFE6] text-xs font-bold hover:bg-gray-300"
                        aria-label={`Aumentar cantidad de ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.code)}
                    className="p-1 text-gray-400 hover:text-red-500"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Notas opcionales & Checkout por WhatsApp */}
            <div className="border-t border-[#F3EFE6] pt-4 space-y-4">
              <div>
                <label htmlFor="custom-notes" className="block text-xs font-medium text-gray-700 mb-1">
                  ¿Quieres agregar el logo de tu empresa o alguna nota?
                </label>
                <textarea
                  id="custom-notes"
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Ej: Necesitamos 20 unidades grabadas con el logo..."
                  className="w-full rounded-lg border border-gray-300 p-2 text-xs focus:border-[#E2B13C] focus:outline-none"
                />
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-white hover:bg-[#20bd5a] transition-all shadow-md"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                Pedir Presupuesto por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-gray-400 hover:underline"
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