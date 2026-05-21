import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import { orderApi, petApi, productApi } from '../services/api';
import type { Order, OrderWithDetails, Pet, Product } from '../types';

export default function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderWithDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await orderApi.getById(id!);
        
        const petsMap = new Map<string, Pet>();
        const productsMap = new Map<string, Product>();
        
        const petIds = orderData.items.filter(item => item.petId).map(item => item.petId!);
        const productIds = orderData.items.filter(item => item.productId).map(item => item.productId!);

        if (petIds.length > 0) {
          const pets = await petApi.getAll();
          pets.forEach(pet => petsMap.set(pet.id, pet));
        }

        if (productIds.length > 0) {
          const products = await productApi.getAll();
          products.forEach(product => productsMap.set(product.id, product));
        }

        const orderWithDetails: OrderWithDetails = {
          ...orderData,
          items: orderData.items.map(item => ({
            ...item,
            pet: item.petId ? petsMap.get(item.petId) : undefined,
            product: item.productId ? productsMap.get(item.productId) : undefined
          }))
        };

        setOrder(orderWithDetails);
      } catch (error) {
        console.error('Failed to fetch order:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { text: '待处理', className: 'bg-yellow-100 text-yellow-700' },
      completed: { text: '已完成', className: 'bg-green-100 text-green-700' },
      cancelled: { text: '已取消', className: 'bg-gray-100 text-gray-700' }
    };
    return badges[status as keyof typeof badges] || badges.pending;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">订单不存在</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-orange-500 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          返回订单列表
        </button>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm opacity-90">订单编号</span>
                <h1 className="text-xl font-bold mt-1">#{order.id}</h1>
              </div>
              <span className={`px-4 py-2 text-sm font-medium rounded-full bg-white/20`}>
                {getStatusBadge(order.status).text}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Clock className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">下单时间</p>
                <p className="font-medium text-gray-800">{formatDate(order.createdAt)}</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-800 mb-4">订单商品</h3>
              <div className="space-y-4">
                {order.items.map((item) => {
                  const name = item.pet?.name || item.product?.name || '未知商品';
                  const imageUrl = item.pet?.imageUrl || item.product?.imageUrl || '';
                  const category = item.pet?.category || item.product?.category || '';
                  
                  return (
                    <div key={item.id} className="flex">
                      <img
                        src={imageUrl}
                        alt={name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                              {category}
                            </span>
                            <h4 className="font-medium text-gray-800 mt-1">{name}</h4>
                          </div>
                          <span className="text-lg font-bold text-orange-500">¥{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">数量: {item.quantity}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-800 mb-4">订单金额</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>商品金额</span>
                  <span>¥{order.totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>运费</span>
                  <span>免费</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold">实付金额</span>
                  <span className="text-xl font-bold text-orange-500">¥{order.totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-center py-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-green-600 font-medium">订单已提交成功</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}