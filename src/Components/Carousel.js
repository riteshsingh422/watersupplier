import React, { useState, useEffect } from 'react';
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

  // Preload images
  useEffect(() => {
    const images = [
      '/img/hero4.jpg',
      '/img/hero2.jpg',
      'https://source.unsplash.com/random/1920x1080?water,blue',
      'https://source.unsplash.com/random/1920x1080?technology',
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
    const validUsername = 'admin';
    const validPassword = 'admin123';
    if (loginUsername === validUsername && loginPassword === validPassword) {
      setShowLoginPopup(false);
      setLoginUsername('');
      setLoginPassword('');
      setLoginError('');
      handleShow();
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
        slide={true} // Ensure slide transition
      >
        <BootstrapCarousel.Item>
          <img
            src="/img/hero4.jpg"
            className="img-fluid w-100"
            alt="Pure Water"
            width="1920"
            height="1080"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://source.unsplash.com/random/1920x1080?water,blue';
            }}
          />
          <BootstrapCarousel.Caption className="carousel-caption-custom">
            <div className="carousel-caption-content slide-from-top">
              <h4 className="text-white text-uppercase fw-bold mb-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'red', fontSize: '1.5rem', marginRight: '0.5rem' }}>•</span>
                IT SOLUTIONS
                <span style={{ color: 'red', fontSize: '1.5rem', marginLeft: '0.5rem' }}>•</span>
              </h4>
              <h1 className="display-3 text-capitalize text-white mb-4">
                We offer highly effective IT solutions for your Success
              </h1>
              <p className="mb-5 fs-5 text-white">
                <span style={{ color: 'red' }}>INSABHI</span> is an Odoo ERP Solution and Software Development company.
              </p>
            </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            src="/img/hero2.jpg"
            className="img-fluid w-100"
            alt="IT Innovation"
            width="1920"
            height="1080"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://source.unsplash.com/random/1920x1080?technology';
            }}
          />
          <BootstrapCarousel.Caption className="carousel-caption-custom">
            <div className="carousel-caption-content slide-from-bottom">
              <h4 className="text-white text-uppercase fw-bold mb-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'red', fontSize: '1.5rem', marginRight: '0.5rem' }}>•</span>
                IT INNOVATION
                <span style={{ color: 'red', fontSize: '1.5rem', marginLeft: '0.5rem' }}>•</span>
              </h4>
              <h1 className="display-3 text-capitalize text-white mb-4">
                Transform Your Business with Cutting-Edge IT
              </h1>
              <p className="mb-5 fs-5 text-white">
                <span style={{ color: 'red' }}>INSABHI</span> delivers innovative software solutions to drive your digital transformation.
              </p>
            </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>

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