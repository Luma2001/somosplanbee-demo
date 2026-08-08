'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NAV_LINKS } from '@/lib/site';
import { useCartStore } from '@/store/useCartStore';
import { CartSheet } from '@/components/site/CartSheet';
import { Logo } from './logo';

// Subscriber genérico para detectar hidratación en cliente
const emptySubscribe = () => () => {};

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Detecta si estamos en el cliente de forma reactiva sin triggering de useEffect
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Muestra 0 en SSR y el total real una vez hidratado en el cliente
  const displayTotal = isClient ? totalItems : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        
        <Logo/>
        
        {/* Navegación Desktop */}
        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
                  isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Botón del Carrito */}
          <Button
            variant="outline"
            className="relative min-h-11 rounded-full px-4"
            onClick={() => setCartOpen(true)}
            aria-label={`Abrir carrito, ${displayTotal} productos`}
          >
            <ShoppingBag aria-hidden="true" className="size-4" />
            <span className="hidden sm:inline">Carrito</span>
            <span
              className="ml-1 inline-flex min-w-6 items-center justify-center rounded-full bg-honey px-2 text-xs font-semibold text-graphite"
              aria-hidden="true"
            >
              {displayTotal}
            </span>
          </Button>

          {/* Menú Mobile Sheet */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="min-h-11 min-w-11 md:hidden"
                aria-label="Abrir menú de navegación"
              >
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-4 font-display text-lg">Navegación</SheetTitle>
              <nav aria-label="Navegación móvil" className="mt-4 flex flex-col gap-1 px-3 pb-6">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary ${
                        isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}