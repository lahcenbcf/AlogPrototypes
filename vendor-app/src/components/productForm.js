// apps/vendor-app/src/components/product/ProductForm.js
import React, { useState } from 'react';
// import { Button } from 'shared-ui'; // If you have it
import './productForm.css';

const ProductForm = ({ onSubmit, initialData = {}, isLoading = false, submitButtonText = "Submit" }) => {
  const [name, setName] = useState(initialData.name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [stock, setStock] = useState(initialData.stock || '');
  const [category, setCategory] = useState(initialData.category || '');
  // Add more fields as needed

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, price: parseFloat(price), stock: parseInt(stock), category });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required disabled={isLoading} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} disabled={isLoading} />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required step="0.01" min="0" disabled={isLoading} />
      </div>
      <div className="form-group">
        <label htmlFor="stock">Stock Quantity</label>
        <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required step="1" min="0" disabled={isLoading} />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required disabled={isLoading} />
      </div>
      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? 'Submitting...' : submitButtonText}
      </button>
      {/* Or use shared Button
      <Button type="submit" variant="primary" disabled={isLoading}>
         {isLoading ? 'Submitting...' : submitButtonText}
      </Button>
      */}
    </form>
  );
};

export default ProductForm;