import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import authService from '../api/authService';
import './loginPage.css'; // We'll add some basic styling
import { Button } from "shared-ui"
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Use the actual credentials your API Gateway expects for an admin
      await authService.login({ username, password }); 
      navigate('/dashboard'); // Redirect to a protected route on successful login
    } catch (err) {
      setError(err.message || 'Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <Button type="submit" variant="primary" onClick={() => {}} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;