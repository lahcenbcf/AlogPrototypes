// apps/admin-app/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import DashboardPage from './pages/dashboardPage';
import ProductsListPage from './pages/productPage';
import UsersListPage from './pages/userListPage';
import ProtectedRoute from './components/auth/protectRoute';
import './App.css'; // Keep or create your basic App.css
import { Link } from 'react-router-dom';
import OrdersListPage from './pages/orderListPage';
// Basic Layout component for protected pages
const AppLayout = ({ children }) => (
  <div>
    <nav style={{ background: '#333', padding: '10px', color: 'white', marginBottom: '20px' }}>
      <Link to="/dashboard" style={{ color: 'white', marginRight: '15px' }}>Dashboard</Link>
      <Link to="/products" style={{ color: 'white', marginRight: '15px' }}>Products</Link>
      <Link to="/users" style={{ color: 'white', marginRight: '15px' }}>Users</Link>
      <Link to="/orders" style={{ color: 'white', marginRight: '15px' }}>Orders</Link>
      {/* Add logout button here if desired, or keep it in DashboardPage */}
    </nav>
    <main>{children}</main>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route element={<ProtectedRoute />}>
          {/* Wrap protected routes with AppLayout */}
          <Route path="/dashboard" element={<AppLayout><DashboardPage /></AppLayout>} />
          <Route path="/products" element={<AppLayout><ProductsListPage /></AppLayout>} />
          <Route path="/users" element={<AppLayout><UsersListPage /></AppLayout>} />
          <Route path="/orders" element={<AppLayout><OrdersListPage /></AppLayout>} />
          
          <Route path="/" element={<Navigate to="/dashboard" replace />} /> 
        </Route>
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;