import apiClient from './apiClient';

const getAllOrders = async () => {
  try {
    // Replace '/admin/orders' with your actual endpoint
    const response = await apiClient.get('/admin/orders');
    return response.data; // Expects an array of order objects
  } catch (error){
    console.error("Error fetching all orders:", error.response?.data || error.message);
    throw error.response?.data || new Error('Failed to fetch orders');
  }
};

export default {
  getAllOrders,
};