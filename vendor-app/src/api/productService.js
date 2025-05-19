// apps/vendor-app/src/services/productService.js
import apiClient from './apiClient'; // Uses vendor-app's apiClient.js

const getVendorProducts = async () => {
  try {
    // Replace '/vendor/products' - API Gateway uses token to determine vendor
    const response = await apiClient.get('/vendor/products');
    return response.data; // Expects an array of product objects for this vendor
  } catch (error) {
    console.error("Error fetching vendor products:", error.response?.data || error.message);
    throw error.response?.data || new Error('Failed to fetch vendor products');
  }
};

const createProduct = async (productData) => {
  try {
    // Replace '/vendor/products'
    const response = await apiClient.post('/vendor/products', productData);
    return response.data; // Expects the newly created product object
  } catch (error) {
    console.error("Error creating product:", error.response?.data || error.message);
    throw error.response?.data || new Error('Failed to create product');
  }
};

export default {
  getVendorProducts,
  createProduct,
};