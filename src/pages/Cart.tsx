import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import type { CartItemWithDetails } from '../types';
import { orderApi } from '../services/api';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItemWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const { 
    getCartItemsWithDetails, 
    updateQuantity, 
    removeFromCart, 
    loadCart,
    clearCart 
  } = useCartStore();

  useEffect(() => {
    const fetchCart = async () => {
      setIsLoading(true);
      await loadCart();
      const items = await getCartItemsWithDetails();
      setCartItems(items);
      setIsLoading(false);
    };
    fetchCart();
  }, [getCartItemsWithDetails, loadCart]);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    setIsCheckingOut(true);
    try {
      await orderApi.create();
      clearCart();
      navigate('/orders');
    } catch (error) {
      console.error('Failed to create order:', error);
      alert('下单失败，请重试');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = item.pet?.price || item.product?.price || 0;
    return sum + (price * item.quantity);
  }, 0);

  const handleQuantityChange = async (id: string, delta: number) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity >= 1) {
        await updateQuantity(id, newQuantity);
        const items = await getCartItemsWithDetails();
        setCartItems(items);
      }
    }
  };

  const handleRemoveItem = async (id: string) => {
    await removeFromCart(id);
    const items = await getCartItemsWithDetails();
    setCartItems(items);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">购物车</h1>
          <p className="text-gray-600">查看并管理您的购物车商品</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">购物车是空的</p>
            <button
              onClick={() => navigate('/pets')}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              去逛逛
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => {
                const name = item.pet?.name || item.product?.name || '未知商品';
                const price = item.pet?.price || item.product?.price || 0;
                const imageUrl = item.pet?.imageUrl || item.product?.imageUrl || '';
                const category = item.pet?.category || item.product?.category || '';
                
                return (
                  <div key={item.id} className="bg-white rounded-xl shadow-md p-4 flex">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            {category}
                          </span>
                          <h3 className="font-semibold text-gray-800 mt-1">{name}</h3>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold text-orange-500">¥{(price * item.quantity).toFixed(2)}</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">订单摘要</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>商品数量</span>
                  <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)} 件</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>运费</span>
                  <span>免费</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold">总计</span>
                  <span className="text-xl font-bold text-orange-500">¥{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                {isCheckingOut ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <CreditCard className="h-5 w-5 mr-2" />
                    结算
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}