import mockApiClient from './mockApiClient';

const login = async (credentials) => {
  const { username, password } = credentials;
  try {
    // 1. Fetch the user by username and role
    const response = await mockApiClient.get(`/users?username=${username}&role=vendor`);
    
    if (response.data && response.data.length > 0) {
      const vendorUser = response.data[0]; // Assuming username is unique for vendors

      // 2. "Validate" password (MOCK VALIDATION)
      if (vendorUser.password === password) {
        // 3. Simulate successful login
        const mockToken = `mock-vendor-token-for-${vendorUser.id}-${Date.now()}`;
        localStorage.setItem('mockAuthToken', mockToken);
        localStorage.setItem('user', JSON.stringify(vendorUser)); // Store user object
        
        return { 
          token: mockToken, 
          user: vendorUser 
        };
      } else {
        throw new Error('Invalid username or password.');
      }
    } else {
      throw new Error('Vendor user not found.');
    }
  } catch (error) {
    console.error("Vendor login error:", error.message);
    throw new Error(error.message || 'Login failed');
  }
};

const logout = () => {
  localStorage.removeItem('mockAuthToken');
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

const isAuthenticated = () => {
  return !!localStorage.getItem('mockAuthToken');
};

export default {
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
};