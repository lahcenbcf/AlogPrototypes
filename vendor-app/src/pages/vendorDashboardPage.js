// apps/vendor-app/src/pages/VendorDashboardPage.js
import React from 'react';
import authService from '../services/authService'; // Vendor's authService
import { useNavigate, Link } from 'react-router-dom';
// import { Button } from 'shared-ui'; // If you have a shared button

const VendorDashboardPage = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser(); // Get vendor info

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Vendor Dashboard</h1>
      {user && <p>Welcome, {user.username || 'Vendor'}!</p>}
      <p>Manage your products and account settings here.</p>
      
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link to="/my-products" style={linkStyle}>
          View My Products
        </Link>
        <Link to="/create-product" style={linkStyle}>
          Add New Product
        </Link>
      </div>

      <button 
        onClick={handleLogout} 
        style={{ 
          marginTop: '40px', 
          padding: '10px 20px', 
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer',
          fontSize: '1em'
        }}
      >
        Logout
      </button>
      {/* If using shared Button:
      <Button onClick={handleLogout} variant="secondary" style={{marginTop: '40px'}}>
        Logout
      </Button>
      */}
    </div>
  );
};

// Simple style for links to look like buttons
const linkStyle = {
  display: 'inline-block',
  padding: '12px 25px',
  backgroundColor: '#28a745', // Vendor theme color
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
  fontSize: '1.1em',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

export default VendorDashboardPage;