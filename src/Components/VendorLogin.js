import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './VendorLogin.css';

const VendorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded email and password
    const validEmail = 'vendor@gmail.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      localStorage.setItem('vendorToken', 'mockToken123'); // ✅ simulate login
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="vendor-login-container">
      <div className="vendor-login-box">
        <h2 className="vendor-login-title">Vendor Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        <div className="vendor-switch">
          <p>Don't have an account? <Link to="/vendor-apply">Become a Vendor</Link></p>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
