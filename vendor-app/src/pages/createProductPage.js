// apps/vendor-app/src/pages/CreateProductPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productService from '../services/productService'; // Vendor's productService
import ProductForm from '../components/product/ProductForm';

const CreateProductPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateProduct = async (productData) => {
    setIsLoading(true);
    setError(null);
    try {
      await productService.createProduct(productData);
      alert('Product created successfully!'); // Or use a more sophisticated notification
      navigate('/my-products'); // Redirect to the product list
    } catch (err) {
      setError(err.message || 'Failed to create product.');
      alert(`Error: ${err.message || 'Failed to create product.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Add New Product</h1>
      {error && <p style={{color: 'red', border: '1px solid red', padding: '10px', backgroundColor: '#ffebee'}}>Error: {error}</p>}
      <ProductForm 
        onSubmit={handleCreateProduct} 
        isLoading={isLoading}
        submitButtonText="Create Product" 
      />
    </div>
  );
};

export default CreateProductPage;