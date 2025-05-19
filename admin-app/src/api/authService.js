import mockApiClient from "./mockApiClient";


const login = async (credentials) => {
  const { username, password } = credentials;
  try {
    // 1. Fetch the user by username (json-server supports this query)
    // We expect an array, even if only one user matches (or empty if none)
    const response = await mockApiClient.get(`/users?username=${username}&role=admin`);
    console.log(username,password)
    if (response.data && response.data.length > 0) {
      const adminUser = response.data[0]; // Assuming username is unique for admins

      // 2. "Validate" password (THIS IS MOCK VALIDATION - NOT SECURE)
      if (adminUser.password === password) {
        // 3. Simulate successful login
        const mockToken = `mock-admin-token-for-${adminUser.id}-${Date.now()}`;
        localStorage.setItem('mockAuthToken', mockToken);
        localStorage.setItem('user', JSON.stringify(adminUser)); // Store user object
        
        // Return data similar to what a real API might return
        return { 
          token: mockToken, 
          user: adminUser 
        };
      } else {
        throw new Error('Invalid username or password.');
      }
    } else {
      throw new Error('Admin user not found.');
    }
  } catch (error) {
    console.error("Admin login error:", error.message);
    // Ensure a consistent error shape if needed by the UI
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