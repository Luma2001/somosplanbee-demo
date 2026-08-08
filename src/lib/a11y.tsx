'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export interface A11ySettings {
  fontScale: number;
  contrast: boolean;
  reading: boolean;
  noMotion: boolean;
}

interface A11yContextValue extends A11ySettings {
  increaseFont: () => void;
  decreaseFont: () => void;
  toggle: (key: 'contrast' | 'reading' | 'noMotion') => void;
  reset: () => void;
}

const DEFAULTS: A11ySettings = {
  fontScale: 100,
  contrast: false,
  reading: false,
  noMotion: false,
};
const STORAGE_KEY = 'planbee.a11y.v1';

const A11yContext = createContext<A11yContextValue | null>(null);

function getInitialSettings(): A11ySettings {
  if (typeof window === 'undefined') return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULTS, ...(JSON.parse(raw) as Partial<A11ySettings>) } : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
}

export function A11yProvider({ children }: { children: ReactNode }) {
  // Inicialización diferida (Lazy initialization)
  const [settings, setSettings] = useState<A11ySettings>(getInitialSettings);

  // Sincronización del estado de React con el DOM externo y localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--a11y-font-scale', `${settings.fontScale}%`);
    root.classList.toggle('a11y-contrast', settings.contrast);
    root.classList.toggle('a11y-reading', settings.reading);
    root.classList.toggle('a11y-no-motion', settings.noMotion);

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* almacenamiento no disponible */
    }
  }, [settings]);

  const increaseFont = useCallback(
    () => setSettings((s) => ({ ...s, fontScale: Math.min(150, s.fontScale + 10) })),
    []
  );

  const decreaseFont = useCallback(
    () => setSettings((s) => ({ ...s, fontScale: Math.max(80, s.fontScale - 10) })),
    []
  );

  const toggle = useCallback(
    (key: 'contrast' | 'reading' | 'noMotion') =>
      setSettings((s) => ({ ...s, [key]: !s[key] })),
    []
  );

  const reset = useCallback(() => setSettings(DEFAULTS), []);

  return (
    <A11yContext.Provider
      value={{ ...settings, increaseFont, decreaseFont, toggle, reset }}
    >
      {children}
    </A11yContext.Provider>
  );
}

export function useA11y(): A11yContextValue {
  const ctx = useContext(A11yContext);
  if (!ctx) throw new Error('useA11y debe usarse dentro de <A11yProvider>');
  return ctx;
}