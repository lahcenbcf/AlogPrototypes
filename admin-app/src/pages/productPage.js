// apps/admin-app/src/pages/ProductsListPage.js
import React, { useState, useEffect } from 'react';
import productService from '../api/productService';
import {Table} from 'shared-ui';// Our reusable table

const ProductsListPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  // Define columns for the Table component
  // The `key` should match the property name in your product data objects
  const columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Category', key: 'category' },
    { header: 'Price', key: 'price', render: (row) => `$${parseFloat(row.price).toFixed(2)}` },
    { header: 'Stock', key: 'stock' },
    { header: 'Vendor ID', key: 'vendorId' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Product Management (Admin)</h1>
      <Table columns={columns} data={products} isLoading={isLoading} error={error} />
    </div>
  );
};

export default ProductsListPage;