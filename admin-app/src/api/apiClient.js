import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'YOUR_API_GATEWAY_BASE_URL', // Replace with your actual API Gateway URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add the auth token to every request if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('mockAuthToken'); // Or get from AuthContext
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Interceptor to handle common errors (e.g., 401 Unauthorized)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      console.error('Unauthorized access - redirecting to login');
      localStorage.removeItem('mockAuthToken'); // Clear token
      // window.location.href = '/login'; // Or use React Router navigation
    }
    return Promise.reject(error);
  }
);

export default apiClient;