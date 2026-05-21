import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Package, Tag, AlertCircle } from 'lucide-react';
import { productApi } from '../services/api';
import type { Product } from '../types';
import { useCartStore } from '../store/cartStore';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await productApi.getById(id!);
        setProduct(productData);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product?.stock && product.stock > 0) {
      addToCart(undefined, product.id);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">商品不存在</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-500 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          返回
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                  {product.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-800 mt-2">{product.name}</h1>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <Package className="h-5 w-5 mr-3 text-gray-400" />
                <span>库存: {product.stock} 件</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Tag className="h-5 w-5 mr-3 text-gray-400" />
                <span>分类: {product.category}</span>
              </div>
              {product.stock < 10 && product.stock > 0 && (
                <div className="flex items-center text-yellow-600 bg-yellow-50 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>库存紧张，仅剩 {product.stock} 件</span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">描述</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">价格</p>
                <p className="text-3xl font-bold text-orange-500">¥{product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`px-8 py-3 font-semibold rounded-full transition-colors flex items-center ${
                  product.stock > 0
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.stock > 0 ? '加入购物车' : '暂时缺货'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}