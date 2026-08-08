import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  code: string;
  name: string;
  category: string;
  quantity: number;
  image: string;
  material?: string;
}

interface CartStore {
  cart: CartItem[];
  isOpen: boolean;
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (code: string) => void;
  updateQuantity: (code: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setIsOpen: (open: boolean) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,

      addToCart: (item) =>
        set((state) => {
          const quantityToAdd = item.quantity ?? 1;
          const existingIndex = state.cart.findIndex((i) => i.code === item.code);

          if (existingIndex > -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += quantityToAdd;
            return { cart: updatedCart, isOpen: true };
          }

          return {
            cart: [...state.cart, { ...item, quantity: quantityToAdd }],
            isOpen: true,
          };
        }),

      removeFromCart: (code) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.code !== code),
        })),

      updateQuantity: (code, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { cart: state.cart.filter((item) => item.code !== code) };
          }
          return {
            cart: state.cart.map((item) =>
              item.code === code ? { ...item, quantity } : item
            ),
          };
        }),

      clearCart: () => set({ cart: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      setIsOpen: (open) => set({ isOpen: open }),
    }),
    {
      name: 'planbee-cart-storage',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true, // Crucial para Next.js 16 / React 19
    }
  )
);