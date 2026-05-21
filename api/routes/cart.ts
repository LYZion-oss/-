import { Router } from 'express';
import { mockCartItems, generateId } from '../data/mockData';

const router = Router();

router.get('/', (req, res) => {
  const userId = req.headers['x-user-id'] || 'user-1';
  const cartItems = mockCartItems.filter(item => item.userId === userId);
  res.json(cartItems);
});

router.post('/', (req, res) => {
  const { petId, productId, quantity = 1 } = req.body;
  const userId = String(req.headers['x-user-id'] || 'user-1');

  if (!petId && !productId) {
    return res.status(400).json({ error: 'Either petId or productId is required' });
  }

  const existingItem = mockCartItems.find(
    item => item.userId === userId && 
    ((petId && item.petId === petId) || (productId && item.productId === productId))
  );

  if (existingItem) {
    existingItem.quantity += quantity;
    return res.json(existingItem);
  }

  const newItem = {
    id: generateId(),
    userId,
    petId,
    productId,
    quantity,
    createdAt: new Date().toISOString()
  };

  mockCartItems.push(newItem);
  res.status(201).json(newItem);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const userId = req.headers['x-user-id'] || 'user-1';

  const itemIndex = mockCartItems.findIndex(
    item => item.id === id && item.userId === userId
  );

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Cart item not found' });
  }

  if (quantity <= 0) {
    mockCartItems.splice(itemIndex, 1);
    return res.json({ message: 'Item removed' });
  }

  mockCartItems[itemIndex].quantity = quantity;
  res.json(mockCartItems[itemIndex]);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const userId = req.headers['x-user-id'] || 'user-1';

  const itemIndex = mockCartItems.findIndex(
    item => item.id === id && item.userId === userId
  );

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Cart item not found' });
  }

  mockCartItems.splice(itemIndex, 1);
  res.json({ message: 'Item removed successfully' });
});

export default router;