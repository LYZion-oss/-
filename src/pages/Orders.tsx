import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { orderApi } from '../services/api';
import type { Order } from '../types';

export default function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await orderApi.getAll();
        setOrders(ordersData);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">我的订单</h1>
          <p className="text-gray-600">查看您的订单记录</p>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">暂无订单</p>
            <button
              onClick={() => navigate('/pets')}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              去购物
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/orders/${order.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-gray-800">订单 #{order.id.substring(0, 8)}</span>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full ${getStatusBadge(order.status).className}`}>
                      {getStatusBadge(order.status).text}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{formatDate(order.createdAt)}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {order.items.slice(0, 3).map((item, index) => (
                        <div
                          key={item.id}
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-600"
                          style={{ marginLeft: index > 0 ? '-10px' : '0' }}
                        >
                          {item.petId ? '🐾' : '📦'}
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-600">
                          +{order.items.length - 3}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-gray-500 text-sm">共 {order.items.reduce((sum, item) => sum + item.quantity, 0)} 件商品</p>
                        <p className="text-lg font-bold text-orange-500">¥{order.totalAmount.toFixed(2)}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}