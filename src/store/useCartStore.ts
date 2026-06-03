import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  status: string; // "10/10", "9/10"
  size: string;
  category?: string;
  images?: string[];
  features?: string[];
  gender?: 'Hombre' | 'Mujer' | 'Unisex';
  description?: string;
  brandInfo?: string;
  authenticityCode?: string;
  sku?: string;
  costPrice?: number;
  washCost?: number;
  packCost?: number;
  soldAt?: string;
  soldPrice?: number;
  soldChannel?: string;
  soldMethod?: string;
}

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => set((state) => {
        // Simple logic: if item is already in cart, don't add again since it's second hand unique item
        if (state.items.find(item => item.id === product.id)) return state;
        return { items: [...state.items, product] };
      }),
      removeItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      })),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price, 0);
      },
    }),
    {
      name: 'refugio-cart-storage',
    }
  )
);
