import { Router } from 'express';
import { mockOrders, mockCartItems, mockPets, mockProducts, generateId, clearCartForUser } from '../data/mockData';

const router = Router();

router.get('/', (req, res) => {
  const userId = req.headers['x-user-id'] || 'user-1';
  const orders = mockOrders.filter(order => order.userId === userId);
  res.json(orders);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const userId = req.headers['x-user-id'] || 'user-1';
  const order = mockOrders.find(o => o.id === id && o.userId === userId);
  
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  res.json(order);
});

router.post('/', (req, res) => {
  const userId = String(req.headers['x-user-id'] || 'user-1');
  const userCartItems = mockCartItems.filter(item => item.userId === userId);

  if (userCartItems.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  const orderItems = userCartItems.map(cartItem => {
    let price = 0;
    
    if (cartItem.petId) {
      const pet = mockPets.find(p => p.id === cartItem.petId);
      if (pet) price = pet.price;
    } else if (cartItem.productId) {
      const product = mockProducts.find(p => p.id === cartItem.productId);
      if (product) price = product.price;
    }

    return {
      id: generateId(),
      orderId: '',
      petId: cartItem.petId,
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      price
    };
  });

  const totalAmount = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const newOrder = {
    id: generateId(),
    userId,
    totalAmount,
    status: 'pending' as const,
    items: orderItems.map(item => ({ ...item, orderId: generateId() })),
    createdAt: new Date().toISOString()
  };

  mockOrders.push(newOrder);

  clearCartForUser(userId);

  res.status(201).json(newOrder);
});

export default router;