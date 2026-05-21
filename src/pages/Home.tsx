import { useEffect, useState } from 'react';
import { ArrowRight, Dog, Cat, Bird, Fish, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { petApi, productApi } from '../services/api';
import type { Pet, Product } from '../types';
import PetCard from '../components/PetCard';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const navigate = useNavigate();
  const [pets, setPets] = useState<Pet[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [petsData, productsData] = await Promise.all([
          petApi.getAll(),
          productApi.getAll()
        ]);
        setPets(petsData.slice(0, 4));
        setProducts(productsData.slice(0, 4));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const categories = [
    { name: '狗狗', icon: Dog, path: '/pets?category=Dog', color: 'bg-amber-100 text-amber-600' },
    { name: '猫咪', icon: Cat, path: '/pets?category=Cat', color: 'bg-purple-100 text-purple-600' },
    { name: '鸟类', icon: Bird, path: '/pets?category=Bird', color: 'bg-blue-100 text-blue-600' },
    { name: '鱼类', icon: Fish, path: '/pets?category=Fish', color: 'bg-cyan-100 text-cyan-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">宠爱有家</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">为您的宠物找到最好的伙伴和用品</p>
            <button
              onClick={() => navigate('/pets')}
              className="px-8 py-3 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center mx-auto"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              开始探索
            </button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">宠物分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => navigate(category.path)}
                className={`${category.color} p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform`}
              >
                <category.icon className="h-12 w-12 mb-3" />
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">热门宠物</h2>
            <button
              onClick={() => navigate('/pets')}
              className="text-orange-500 hover:text-orange-600 flex items-center"
            >
              查看全部 <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-200 rounded-xl h-64 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">推荐商品</h2>
            <button
              onClick={() => navigate('/products')}
              className="text-orange-500 hover:text-orange-600 flex items-center"
            >
              查看全部 <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-200 rounded-xl h-64 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetail={() => navigate(`/products/${product.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">宠爱有家</h3>
              <p className="text-gray-400">为您的宠物提供最好的服务和产品</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/pets')} className="hover:text-white">宠物</button></li>
                <li><button onClick={() => navigate('/products')} className="hover:text-white">商品</button></li>
                <li><button onClick={() => navigate('/orders')} className="hover:text-white">订单</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <p className="text-gray-400">客服电话: 400-888-8888</p>
              <p className="text-gray-400">邮箱: service@petshop.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 宠爱有家. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}