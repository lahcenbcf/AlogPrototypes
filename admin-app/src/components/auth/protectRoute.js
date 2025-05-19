// apps/admin-app/src/components/auth/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../../api/authService';

const ProtectedRoute = () => {
  if (!authService.isAuthenticated()) {
    // User not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // User is authenticated, render the child routes/component
  return <Outlet />; 
  // Outlet is used in React Router v6 to render child routes.
  // For v5, you would pass { children } and render `children`
  // or use `Component` prop: <Route {...rest} render={(props) => <Component {...props} />} />
};

export default ProtectedRoute;