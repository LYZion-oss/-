import { create } from 'zustand';
import type { CartItem, CartItemWithDetails, Pet, Product } from '../types';
import { cartApi, petApi, productApi } from '../services/api';

interface CartStore {
  items: CartItem[];
  isLoading: boolean;
  loadCart: () => Promise<void>;
  addToCart: (petId?: string, productId?: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  clearCart: () => void;
  getCartItemsWithDetails: () => Promise<CartItemWithDetails[]>;
  getTotalItems: () => number;
  getTotalPrice: () => Promise<number>;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isLoading: false,

  loadCart: async () => {
    set({ isLoading: true });
    try {
      const items = await cartApi.getAll();
      set({ items });
    } catch (error) {
      console.error('Failed to load cart:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  addToCart: async (petId, productId) => {
    try {
      const newItem = await cartApi.addItem(petId, productId);
      set((state) => ({
        items: [...state.items, newItem]
      }));
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  },

  updateQuantity: async (id, quantity) => {
    try {
      const result = await cartApi.updateItem(id, quantity);
      if ('message' in result) {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }));
      } else {
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }));
      }
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  },

  removeFromCart: async (id) => {
    try {
      await cartApi.removeItem(id);
      set((state) => ({
        items: state.items.filter(item => item.id !== id)
      }));
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    }
  },

  clearCart: () => {
    set({ items: [] });
  },

  getCartItemsWithDetails: async (): Promise<CartItemWithDetails[]> => {
    const { items } = get();
    const petsMap = new Map<string, Pet>();
    const productsMap = new Map<string, Product>();

    const petIds = items.filter(item => item.petId).map(item => item.petId!);
    const productIds = items.filter(item => item.productId).map(item => item.productId!);

    if (petIds.length > 0) {
      const pets = await petApi.getAll();
      pets.forEach(pet => petsMap.set(pet.id, pet));
    }

    if (productIds.length > 0) {
      const products = await productApi.getAll();
      products.forEach(product => productsMap.set(product.id, product));
    }

    return items.map(item => ({
      ...item,
      pet: item.petId ? petsMap.get(item.petId) : undefined,
      product: item.productId ? productsMap.get(item.productId) : undefined
    }));
  },

  getTotalItems: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getTotalPrice: async () => {
    const itemsWithDetails = await get().getCartItemsWithDetails();
    return itemsWithDetails.reduce((sum, item) => {
      const price = item.pet?.price || item.product?.price || 0;
      return sum + (price * item.quantity);
    }, 0);
  }
}));
