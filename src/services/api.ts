import type { Pet, Product, CartItem, Order, OrderWithDetails } from '../types';

const API_BASE = '/api';

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'x-user-id': 'user-1'
});

export const petApi = {
  getAll: async (category?: string): Promise<Pet[]> => {
    const url = category ? `${API_BASE}/pets?category=${category}` : `${API_BASE}/pets`;
    const response = await fetch(url);
    return response.json();
  },
  
  getById: async (id: string): Promise<Pet> => {
    const response = await fetch(`${API_BASE}/pets/${id}`);
    return response.json();
  },
  
  getCategories: async (): Promise<string[]> => {
    const response = await fetch(`${API_BASE}/pets/categories`);
    return response.json();
  }
};

export const productApi = {
  getAll: async (category?: string): Promise<Product[]> => {
    const url = category ? `${API_BASE}/products?category=${category}` : `${API_BASE}/products`;
    const response = await fetch(url);
    return response.json();
  },
  
  getById: async (id: string): Promise<Product> => {
    const response = await fetch(`${API_BASE}/products/${id}`);
    return response.json();
  },
  
  getCategories: async (): Promise<string[]> => {
    const response = await fetch(`${API_BASE}/products/categories`);
    return response.json();
  }
};

export const cartApi = {
  getAll: async (): Promise<CartItem[]> => {
    const response = await fetch(`${API_BASE}/cart`, {
      headers: getHeaders()
    });
    return response.json();
  },
  
  addItem: async (petId?: string, productId?: string, quantity = 1): Promise<CartItem> => {
    const response = await fetch(`${API_BASE}/cart`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ petId, productId, quantity })
    });
    return response.json();
  },
  
  updateItem: async (id: string, quantity: number): Promise<CartItem | { message: string }> => {
    const response = await fetch(`${API_BASE}/cart/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ quantity })
    });
    return response.json();
  },
  
  removeItem: async (id: string): Promise<{ message: string }> => {
    const response = await fetch(`${API_BASE}/cart/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    return response.json();
  }
};

export const orderApi = {
  getAll: async (): Promise<Order[]> => {
    const response = await fetch(`${API_BASE}/orders`, {
      headers: getHeaders()
    });
    return response.json();
  },
  
  getById: async (id: string): Promise<OrderWithDetails> => {
    const response = await fetch(`${API_BASE}/orders/${id}`, {
      headers: getHeaders()
    });
    return response.json();
  },
  
  create: async (): Promise<Order> => {
    const response = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: getHeaders()
    });
    return response.json();
  }
};