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

export interface OrderItem {
  id: string;
  orderId: string;
  petId?: string;
  productId?: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  items: OrderItem[];
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Buddy',
    category: 'Dog',
    breed: 'Golden Retriever',
    age: 2,
    price: 2500.00,
    description: 'Friendly and loyal golden retriever puppy with beautiful golden fur.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Mittens',
    category: 'Cat',
    breed: 'Persian',
    age: 1,
    price: 1800.00,
    description: 'Fluffy Persian cat with beautiful blue eyes and luxurious fur.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: 'Charlie',
    category: 'Bird',
    breed: 'Parrot',
    age: 3,
    price: 800.00,
    description: 'Colorful talking parrot with vibrant feathers.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: 'Nemo',
    category: 'Fish',
    breed: 'Clownfish',
    age: 1,
    price: 150.00,
    description: 'Orange and white clownfish, perfect for aquarium.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: 'Max',
    category: 'Dog',
    breed: 'German Shepherd',
    age: 3,
    price: 3200.00,
    description: 'Smart and protective German Shepherd, excellent guard dog.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: 'Luna',
    category: 'Cat',
    breed: 'Siamese',
    age: 2,
    price: 2000.00,
    description: 'Elegant Siamese cat with striking blue eyes.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Dog Food',
    category: 'Food',
    price: 89.00,
    description: 'High-quality dog food with real meat and essential nutrients.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: 'Cat Litter',
    category: 'Supplies',
    price: 29.00,
    description: 'Clumping cat litter, lavender scented for freshness.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: 'Comfortable Pet Bed',
    category: 'Furniture',
    price: 129.00,
    description: 'Orthopedic pet bed with soft cushioning for ultimate comfort.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: 'Leash & Collar Set',
    category: 'Accessories',
    price: 45.00,
    description: 'Stylish leash and collar set available in multiple colors.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: 'Cat Scratching Post',
    category: 'Furniture',
    price: 65.00,
    description: 'Tall scratching post with toy mouse for hours of fun.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: 'Bird Cage',
    category: 'Furniture',
    price: 199.00,
    description: 'Spacious bird cage with perches and feeding bowls.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: 'Fish Tank Decor',
    category: 'Accessories',
    price: 35.00,
    description: 'Beautiful aquarium decorations including rocks and plants.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=aquarium%20decorations%20rocks%20plants&image_size=square',
    stock: 60,
    createdAt: '2024-01-23T16:00:00Z'
  },
  {
    id: '8',
    name: 'Pet Grooming Kit',
    category: 'Supplies',
    price: 75.00,
    description: 'Complete grooming kit with brushes, combs, and nail clippers.',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=pet%20grooming%20kit%20brushes%20combs&image_size=square',
    stock: 45,
    createdAt: '2024-01-26T10:30:00Z'
  }
];

export const petCategories = ['Dog', 'Cat', 'Bird', 'Fish'];
export const productCategories = ['Food', 'Supplies', 'Furniture', 'Accessories'];

export let mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'test@example.com',
    name: 'Test User',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

export let mockCartItems: CartItem[] = [];
export let mockOrders: Order[] = [];

export const clearCartForUser = (userId: string): void => {
  mockCartItems = mockCartItems.filter(item => item.userId !== userId);
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};