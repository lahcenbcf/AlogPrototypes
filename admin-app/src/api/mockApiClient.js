// apps/admin-app/src/mockApiClient.js 
// (and similar in vendor-app if it also needs to hit json-server)
import axios from 'axios';

const mockApiClient = axios.create({
  baseURL: 'http://localhost:3001', // JSON-SERVER URL
  // ... headers and interceptors for mock auth if needed
});

// Mock auth token interceptor (if your json-server expects a mock token)
mockApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('mockAuthToken'); 
    if (token && config.url.startsWith('/users')) { // Only add for specific mock routes if needed
      // config.headers['Authorization'] = `Bearer ${token}`; // json-server doesn't use this by default
    }
    return config;
  }, (error) => Promise.reject(error)
);

export default mockApiClient;