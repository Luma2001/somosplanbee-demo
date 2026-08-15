'use client';

import { useState, useSyncExternalStore } from 'react';
import {
  Accessibility,
  BookOpen,
  Contrast,
  Minus,
  PauseCircle,
  Plus,
  RotateCcw,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useA11y } from '@/lib/a11y';

// Helper anti-hidratación seguro para Next.js
const subscribe = () => () => {};
function useIsHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

/** Widget flotante de accesibilidad (WCAG 2.1 AA). */
export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const a11y = useA11y();
  const isHydrated = useIsHydrated();

  // Si aún estamos en SSR / hidratación inicial, no renderizamos
  if (!isHydrated) return null;

  return (
    <div className="fixed bottom-9 right-4 z-50 print:hidden">
      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-label="Opciones de accesibilidad"
          className="surface-card mb-3 w-72 p-4 shadow-var(--shadow-lift) animate-in fade-in-0 zoom-in-95"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-foreground">
              Accesibilidad
            </h2>
            <Button
              variant="ghost"
              size="icon"
              className="min-h-11 min-w-11 text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
              aria-label="Cerrar opciones de accesibilidad"
            >
              <X className="size-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between gap-2 rounded-xl bg-secondary px-3 py-2 text-secondary-foreground">
              <span className="text-sm font-medium">Tamaño de texto</span>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="min-h-11 min-w-11 border-border bg-background"
                  onClick={a11y.decreaseFont}
                  aria-label="Disminuir tamaño de fuente"
                >
                  <Minus className="size-4" aria-hidden="true" />
                </Button>
                <span className="w-12 text-center text-sm font-semibold tabular-nums" aria-live="polite">
                  {a11y.fontScale}%
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="min-h-11 min-w-11 border-border bg-background"
                  onClick={a11y.increaseFont}
                  aria-label="Aumentar tamaño de fuente"
                >
                  <Plus className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>

            <ToggleRow
              label="Alto contraste"
              icon={<Contrast className="size-4" aria-hidden="true" />}
              pressed={a11y.contrast}
              onClick={() => a11y.toggle('contrast')}
            />
            <ToggleRow
              label="Modo lectura"
              icon={<BookOpen className="size-4" aria-hidden="true" />}
              pressed={a11y.reading}
              onClick={() => a11y.toggle('reading')}
            />
            <ToggleRow
              label="Detener animaciones"
              icon={<PauseCircle className="size-4" aria-hidden="true" />}
              pressed={a11y.noMotion}
              onClick={() => a11y.toggle('noMotion')}
            />

            <Button
              variant="ghost"
              className="w-full min-h-11 justify-start gap-2 text-muted-foreground hover:text-foreground"
              onClick={a11y.reset}
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Restablecer
            </Button>
          </div>
        </div>
      )}

      <Button
        size="lg"
        className="min-h-14 min-w-14 rounded-full shadow-var(--shadow-lift) bg-primary/90 text-primary-foreground hover:bg-primary/90"
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <Accessibility className="size-6" aria-hidden="true" />
        <span className="sr-only sm:not-sr-only sm:ml-2 font-medium">
          Accesibilidad
        </span>
      </Button>
    </div>
  );
}

function ToggleRow({
  label,
  icon,
  pressed,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex w-full min-h-11 items-center justify-between gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
        pressed
          ? 'border-olive bg-accent text-accent-foreground font-semibold'
          : 'border-border bg-background/50 hover:bg-secondary text-foreground'
      }`}
    >
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span className="text-xs text-muted-foreground">
        {pressed ? 'Activado' : 'Desactivado'}
      </span>
    </button>
  );
}