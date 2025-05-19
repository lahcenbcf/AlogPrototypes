// apps/vendor-app/src/pages/MyProductsPage.js
import React, { useState, useEffect } from 'react';
import productService from '../services/productService'; // Vendor's productService
import Table from '../components/common/Table'; // Assuming you copied or shared this

const MyProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await productService.getVendorProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Category', key: 'category' },
    { header: 'Price', key: 'price', render: (row) => `$${parseFloat(row.price).toFixed(2)}` },
    { header: 'Stock', key: 'stock' },
    // Add actions like Edit/Delete later if needed
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Products</h1>
      <Table columns={columns} data={products} isLoading={isLoading} error={error} />
    </div>
  );
};

export default MyProductsPage;