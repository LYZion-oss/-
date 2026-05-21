import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { petApi } from '../services/api';
import type { Pet } from '../types';
import PetCard from '../components/PetCard';

export default function Pets() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [pets, setPets] = useState<Pet[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const category = searchParams.get('category') || '';
    setSelectedCategory(category);

    const fetchData = async () => {
      try {
        const [petsData, categoriesData] = await Promise.all([
          petApi.getAll(category),
          petApi.getCategories()
        ]);
        setPets(petsData);
        setCategories(['全部', ...categoriesData]);
      } catch (error) {
        console.error('Failed to fetch pets:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === '全部') {
      navigate('/pets');
    } else {
      navigate(`/pets?category=${category}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">宠物</h1>
          <p className="text-gray-600">选择您心仪的宠物伙伴</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-64 animate-pulse" />
            ))}
          </div>
        ) : pets.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">暂无宠物</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                onViewDetail={() => navigate(`/pets/${pet.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}