import apiClient from './apiClient';
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