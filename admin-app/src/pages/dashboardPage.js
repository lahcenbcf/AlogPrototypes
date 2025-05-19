// apps/admin-app/src/pages/DashboardPage.js
import React from 'react';
import authService from '../api/authService';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared-ui';
const DashboardPage = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Admin Dashboard</h1>
      {user && <p>Welcome, {user.username || 'Admin'}! (Role: {user.role})</p>}
      <p>This is a protected area.</p>
      <button onClick={handleLogout} style={{padding: '10px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
        Logout
      </button>
      <Button onClick={handleLogout} variant="secondary">
        Logout
      </Button>
      
    </div>
  );
};

export default DashboardPage;