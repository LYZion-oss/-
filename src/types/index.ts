export interface Pet {
  id: string;
  name: string;
  category: string;
  breed: string;
  age: number;
  price: number;
  description: string;
  imageUrl: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
  createdAt: string;
}

export interface CartItem {
  id: string;
  userId: string;
  petId?: string;
  productId?: string;
  quantity: number;
  createdAt: string;
}

export interface CartItemWithDetails extends CartItem {
  pet?: Pet;
  product?: Product;
}

export interface OrderItem {
  id: string;
  orderId: string;
  petId?: string;
  productId?: string;
  quantity: number;
  price: number;
}

export interface OrderItemWithDetails extends OrderItem {
  pet?: Pet;
  product?: Product;
}

export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  items: OrderItem[];
  createdAt: string;
}

export interface OrderWithDetails extends Order {
  items: OrderItemWithDetails[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}