import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
  onViewDetail: () => void;
}

export default function ProductCard({ product, onViewDetail }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(undefined, product.id);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onViewDetail}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
            {product.category}
          </span>
        </div>
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">
              仅剩{product.stock}件
            </span>
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-gray-500 text-white text-xs rounded-full">
              缺货
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-orange-500">¥{product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`p-2 rounded-full transition-colors ${
              product.stock > 0
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}