import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Calendar, Tag, Award } from 'lucide-react';
import { petApi } from '../services/api';
import type { Pet } from '../types';
import { useCartStore } from '../store/cartStore';

export default function PetDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pet, setPet] = useState<Pet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const petData = await petApi.getById(id!);
        setPet(petData);
      } catch (error) {
        console.error('Failed to fetch pet:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPet();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(pet?.id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">宠物不存在</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-orange-500 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          返回
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={pet.imageUrl}
              alt={pet.name}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                  {pet.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-800 mt-2">{pet.name}</h1>
                <p className="text-gray-500">{pet.breed}</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="h-6 w-6 text-red-400" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                <span>年龄: {pet.age} 岁</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Tag className="h-5 w-5 mr-3 text-gray-400" />
                <span>品种: {pet.breed}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="h-5 w-5 mr-3 text-gray-400" />
                <span>健康状况: 良好</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">描述</h3>
              <p className="text-gray-600 leading-relaxed">{pet.description}</p>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">价格</p>
                <p className="text-3xl font-bold text-orange-500">¥{pet.price.toFixed(2)}</p>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors flex items-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}