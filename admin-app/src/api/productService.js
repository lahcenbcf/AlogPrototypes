// apps/admin-app/src/services/productService.js
import apiClient from './apiClient';

// This "interface" defines what the component expects
// In TypeScript, you'd define an actual interface Product {}
// For JavaScript, we rely on the shape of the object.

const getAllProducts = async () => {
  try {
    // Replace '/admin/products' with your actual endpoint
    const response = await apiClient.get('/admin/products');
    return response.data; // Expects an array of product objects
  } catch (error) {
    console.error("Error fetching all products:", error.response?.data || error.message);
    throw error.response?.data || new Error('Failed to fetch products');
  }
};

export default {
  getAllProducts,
};