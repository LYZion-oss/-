import { Router } from 'express';
import { mockProducts, productCategories } from '../data/mockData';

const router = Router();

router.get('/', (req, res) => {
  const { category } = req.query;
  let products = [...mockProducts];
  
  if (category && productCategories.includes(category as string)) {
    products = products.filter(product => product.category === category);
  }
  
  res.json(products);
});

router.get('/categories', (req, res) => {
  res.json(productCategories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = mockProducts.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  res.json(product);
});

export default router;