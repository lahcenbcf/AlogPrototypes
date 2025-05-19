// apps/vendor-app/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import VendorDashboardPage from './pages/VendorDashboardPage'; // Placeholder
import MyProductsPage from './pages/MyProductsPage';
import CreateProductPage from './pages/CreateProductPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './App.css';

const AppLayout = ({ children }) => (
  <div>
    <nav style={{ background: '#28a745', padding: '10px', color: 'white', marginBottom: '20px' }}>
      {/* <Link to="/dashboard" style={{ color: 'white', marginRight: '15px' }}>Dashboard</Link> */}
      <Link to="/my-products" style={{ color: 'white', marginRight: '15px' }}>My Products</Link>
      <Link to="/create-product" style={{ color: 'white', marginRight: '15px' }}>Add Product</Link>
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
          <Route path="/dashboard" element={<AppLayout><VendorDashboardPage /></AppLayout>} />
          <Route path="/my-products" element={<AppLayout><MyProductsPage /></AppLayout>} />
          <Route path="/create-product" element={<AppLayout><CreateProductPage /></AppLayout>} />
          <Route path="/" element={<Navigate to="/my-products" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
export default App;