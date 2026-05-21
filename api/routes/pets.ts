import { Router } from 'express';
import { mockPets, petCategories } from '../data/mockData';

const router = Router();

router.get('/', (req, res) => {
  const { category } = req.query;
  let pets = [...mockPets];
  
  if (category && petCategories.includes(category as string)) {
    pets = pets.filter(pet => pet.category === category);
  }
  
  res.json(pets);
});

router.get('/categories', (req, res) => {
  res.json(petCategories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const pet = mockPets.find(p => p.id === id);
  
  if (!pet) {
    return res.status(404).json({ error: 'Pet not found' });
  }
  
  res.json(pet);
});

export default router;