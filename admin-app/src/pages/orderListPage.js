import React, { useState, useEffect } from 'react';
import orderService from '../api/orderService'; // Admin's orderService
import { Table } from 'shared-ui';

const OrdersListPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await orderService.getAllOrders();
        setOrders(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const columns = [
    { header: 'Order ID', key: 'id' },
    { header: 'User ID', key: 'userId' },
    { header: 'Total Amount', key: 'totalAmount', render: (row) => `$${parseFloat(row.totalAmount).toFixed(2)}` },
    { header: 'Status', key: 'status' },
    { 
      header: 'Date', 
      key: 'date', 
      render: (row) => row.date ? new Date(row.date).toLocaleDateString() : 'N/A' 
    },
    // You might want a more detailed view for products in an order
    // For simplicity, we're not expanding that here.
    // Example: { header: 'Items', key: 'products', render: (row) => row.products.map(p => p.productId).join(', ') }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Order Management (Admin)</h1>
      <Table columns={columns} data={orders} isLoading={isLoading} error={error} />
    </div>
  );
};

export default OrdersListPage;