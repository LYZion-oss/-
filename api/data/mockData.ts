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
};export interface Pet {export interface Pet {
  id: string;
  name: string;
  category: string;
export interface Pet {
  id: string;
  name: string;
  category: string;
  breed: string;
  age: number;
  price: number;
  description:export interface Pet {
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

export interfaceexport interface Pet {
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
  category: string;export interface Pet {
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
  userIdexport interface Pet {
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
  status: 'pending' | 'completedexport interface Pet {
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
  items:export interface Pet {
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
  idexport interface Pet {
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

export const mockPets:export interface Pet {
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
    name: '巴export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?promptexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%2export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    categoryexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'httpsexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_sizeexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T1export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: 'export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed:export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.0export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    idexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 1export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedanceexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimmingexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?promptexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyesexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-2export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export constexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    nameexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_toexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%2export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAtexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:0export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name:export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_toexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%2export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAtexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:0export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name:export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 12export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/textexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%2export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock:export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14Texport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id:export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=squareexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-0export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    categoryexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description:export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=sexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    categoryexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    descriptionexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spaciousexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&imageexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '202export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    priceexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    price: 35.00,
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    price: 35.00,
    description: '精美的水族箱装饰品，包括岩石和植物。',
    imageUrl:export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    price: 35.00,
    description: '精美的水族箱装饰品，包括岩石和植物。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=aquexport interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    price: 35.00,
    description: '精美的水族箱装饰品，包括岩石和植物。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=aquarium%20decorations%20rocks%20plants&image_size=square',export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    price: 35.00,
    description: '精美的水族箱装饰品，包括岩石和植物。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=aquarium%20decorations%20rocks%20plants&image_size=square',
    stock: 60,
    createdAt: '2024-01export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    price: 35.00,
    description: '精美的水族箱装饰品，包括岩石和植物。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=aquarium%20decorations%20rocks%20plants&image_size=square',
    stock: 60,
    createdAt: '2024-01-23T16:00:00Z'
  },
  {export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    price: 35.00,
    description: '精美的水族箱装饰品，包括岩石和植物。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=aquarium%20decorations%20rocks%20plants&image_size=square',
    stock: 60,
    createdAt: '2024-01-23T16:00:00Z'
  },
  {
    id: '8',
    name: '宠物美容套装',
    category:export interface Pet {
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
    name: '巴迪',
    category: 'Dog',
    breed: '金毛寻回犬',
    age: 2,
    price: 2500.00,
    description: '友善忠诚的金毛幼犬，拥有美丽的金色毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cute%20golden%20retriever%20puppy%20portrait&image_size=square',
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: '米藤丝',
    category: 'Cat',
    breed: '波斯猫',
    age: 1,
    price: 1800.00,
    description: '毛茸茸的波斯猫，拥有美丽的蓝眼睛和奢华的毛发。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fluffy%20white%20persian%20cat%20portrait&image_size=square',
    createdAt: '2024-01-18T14:30:00Z'
  },
  {
    id: '3',
    name: '查理',
    category: 'Bird',
    breed: '鹦鹉',
    age: 3,
    price: 800.00,
    description: '色彩缤纷的会说话鹦鹉，羽毛鲜艳。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=colorful%20talking%20parrot%20perched&image_size=square',
    createdAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    name: '尼莫',
    category: 'Fish',
    breed: '小丑鱼',
    age: 1,
    price: 150.00,
    description: '橙白相间的小丑鱼，非常适合水族箱。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=orange%20clownfish%20swimming%20underwater&image_size=square',
    createdAt: '2024-01-22T16:45:00Z'
  },
  {
    id: '5',
    name: '马克斯',
    category: 'Dog',
    breed: '德国牧羊犬',
    age: 3,
    price: 3200.00,
    description: '聪明且具有保护欲的德国牧羊犬，是出色的护卫犬。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=german%20shepherd%20dog%20portrait&image_size=square',
    createdAt: '2024-01-25T11:00:00Z'
  },
  {
    id: '6',
    name: '露娜',
    category: 'Cat',
    breed: '暹罗猫',
    age: 2,
    price: 2000.00,
    description: '优雅的暹罗猫，拥有迷人的蓝眼睛。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=siamese%20cat%20with%20blue%20eyes&image_size=square',
    createdAt: '2024-01-28T08:30:00Z'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '优质狗粮',
    category: 'Food',
    price: 89.00,
    description: '高品质狗粮，含真正肉类和必需营养成分。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=premium%20dog%20food%20bag%20product&image_size=square',
    stock: 100,
    createdAt: '2024-01-10T09:00:00Z'
  },
  {
    id: '2',
    name: '猫砂',
    category: 'Supplies',
    price: 29.00,
    description: '结团猫砂，薰衣草香味，保持清新。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20litter%20box%20with%20scoop&image_size=square',
    stock: 50,
    createdAt: '2024-01-12T10:30:00Z'
  },
  {
    id: '3',
    name: '舒适宠物床',
    category: 'Furniture',
    price: 129.00,
    description: '骨科宠物床，柔软缓冲，极致舒适。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=comfortable%20pet%20bed%20for%20dogs%20and%20cats&image_size=square',
    stock: 30,
    createdAt: '2024-01-14T14:00:00Z'
  },
  {
    id: '4',
    name: '牵引绳和项圈套装',
    category: 'Accessories',
    price: 45.00,
    description: '时尚牵引绳和项圈套装，多种颜色可选。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=dog%20leash%20and%20collar%20set&image_size=square',
    stock: 80,
    createdAt: '2024-01-16T11:15:00Z'
  },
  {
    id: '5',
    name: '猫抓柱',
    category: 'Furniture',
    price: 65.00,
    description: '高大猫抓柱，带玩具老鼠，乐趣无穷。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20scratching%20post%20with%20toy&image_size=square',
    stock: 40,
    createdAt: '2024-01-19T09:45:00Z'
  },
  {
    id: '6',
    name: '鸟笼',
    category: 'Furniture',
    price: 199.00,
    description: '宽敞鸟笼，配有栖木和喂食碗。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=spacious%20bird%20cage%20with%20perches&image_size=square',
    stock: 25,
    createdAt: '2024-01-21T13:20:00Z'
  },
  {
    id: '7',
    name: '鱼缸装饰',
    category: 'Accessories',
    price: 35.00,
    description: '精美的水族箱装饰品，包括岩石和植物。',
    imageUrl: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=aquarium%20decorations%20rocks%20plants&image_size=square',
    stock: 60,
    createdAt: '2024-01-23T16:00:00Z'
  },
  {
    id: '8',
    name: '宠物美容套装',
    category: 'Supplies',
    price: 75.00,
    description: '