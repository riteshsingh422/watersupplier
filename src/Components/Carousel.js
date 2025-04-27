import React, { useState } from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({ handleShow }) => {
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleOrderNowClick = () => {
    setShowSignupPopup(true);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setSignupError('Passwords do not match');
    } else {
      setShowSignupPopup(false);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setSignupError('');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const validUsername = 'admin';
    const validPassword = 'admin123';

    if (loginUsername === validUsername && loginPassword === validPassword) {
      setShowLoginPopup(false);
      setLoginUsername('');
      setLoginPassword('');
      setLoginError('');
      handleShow(); // Call handleShow on successful login
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleCloseSignupPopup = () => {
    setShowSignupPopup(false);
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSignupError('');
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
    setLoginUsername('');
    setLoginPassword('');
    setLoginError('');
  };

  const handleLoginLinkClick = () => {
    setShowSignupPopup(false);
    setShowLoginPopup(true);
  };

  const handleSignupLinkClick = () => {
    setShowLoginPopup(false);
    setShowSignupPopup(true);
  };

  return (
    <div className="carousel-header">
      <BootstrapCarousel
        id="carouselId"
        ride="carousel"
        interval={3000}
        pause={false}
      >
        <BootstrapCarousel.Item>
          <img
            src="/img/carousel-1.jpg"
            className="img-fluid w-100"
            alt="Pure Water"
            onError={(e) => {
              e.target.src = 'https://source.unsplash.com/random/1920x1080?water,blue';
            }}
          />
          <BootstrapCarousel.Caption className="carousel-caption-custom">
            <div className="carousel-caption-content slide-from-left">
              <h4 className="text-white text-uppercase fw-bold mb-3">Pure Living</h4>
              <h1 className="display-3 text-capitalize text-white mb-4">
                Safe Water for a Healthier You
              </h1>
              <p className="mb-5 fs-5 text-white">
                Access clean, safe water to elevate your life. Quality you can trust, delivered with care.
              </p>
              <div className="carousel-caption-content-btn">
                <button
                  onClick={handleOrderNowClick}
                  className="btn rounded-pill py-3 px-5 slide-from-left"
                  style={{
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    border: '1px solid #fff',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            src="/img/carousel-2.jpg"
            className="img-fluid w-100"
            alt="Healthy Life"
            onError={(e) => {
              e.target.src = 'https://source.unsplash.com/random/1920x1080?water,wave';
            }}
          />
          <BootstrapCarousel.Caption className="carousel-caption-custom">
            <div className="carousel-caption-content slide-from-right">
              <h4 className="text-white text-uppercase fw-bold mb-3">Pure Living</h4>
              <h1 className="display-3 text-capitalize text-white mb-4">
                Safe Water for a Healthier You
              </h1>
              <p className="mb-5 fs-5 text-white">
                Access clean, safe water to elevate your life. Quality you can trust, delivered with care.
              </p>
              <div className="carousel-caption-content-btn">
                <button
                  onClick={handleOrderNowClick}
                  className="btn rounded-pill py-3 px-5 slide-from-right"
                  style={{
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    border: '1px solid #fff',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>

      {/* Custom Signup Popup */}
      {showSignupPopup && (
        <div className="custom-login-popup" onClick={handleCloseSignupPopup}>
          <div className="custom-login-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="popup-close-icon" onClick={handleCloseSignupPopup} />
            <h3>Signup</h3>
            {signupError && <p className="error-message">{signupError}</p>}
            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button type="submit">Signup</button>
            </form>
            <p className="login-link">
              Already have an account? <span onClick={handleLoginLinkClick}>Login</span>
            </p>
          </div>
        </div>
      )}

      {/* Custom Login Popup */}
      {showLoginPopup && (
        <div className="custom-login-popup" onClick={handleCloseLoginPopup}>
          <div className="custom-login-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="popup-close-icon" onClick={handleCloseLoginPopup} />
            <h3>Login to Order</h3>
            {loginError && <p className="error-message">{loginError}</p>}
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <p className="login-link">
              Don't have an account? <span onClick={handleSignupLinkClick}>Signup</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;