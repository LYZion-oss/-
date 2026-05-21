import { Heart, ShoppingCart } from 'lucide-react';
import type { Pet } from '../types';
import { useCartStore } from '../store/cartStore';

interface PetCardProps {
  pet: Pet;
  onViewDetail: () => void;
}

export default function PetCard({ pet, onViewDetail }: PetCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(pet.id);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onViewDetail}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <Heart className="h-5 w-5 text-red-400" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
            {pet.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{pet.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{pet.breed}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-orange-500">¥{pet.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}