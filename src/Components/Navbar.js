import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { FaHandHoldingWater, FaBars, FaUser, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleShow, scrollToAbout, scrollToService, scrollToContact }) => {
  const [scrolled, setScrolled] = useState(false);
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
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVendorClick = () => {
    navigate('/vendor-login');
  };

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
      navigate('/order-now');
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

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="container-fluid position-fixed p-0" style={{ zIndex: 1000 }}>
      <BootstrapNavbar
        expand="lg"
        className={`navbar-light px-4 px-lg-5 py-3 py-lg-0 ${
          scrolled ? 'navbar-scrolled' : 'navbar-transparent'
        }`}
      >
        <BootstrapNavbar.Brand href="/" className="navbar-brand-animate">
          <h1 className="text-primary m-0 d-flex align-items-center">
            <FaHandHoldingWater className="me-3" /> AquaNest
          </h1>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbarCollapse">
          <FaBars />
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto py-0">
            <Nav.Link href="/" active className="nav-link-custom nav-link-animate">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom nav-link-animate" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>
              About
            </Nav.Link>
            <Nav.Link href="#service" className="nav-link-custom nav-link-animate" onClick={(e) => { e.preventDefault(); scrollToService(); }}>
              Service
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom nav-link-animate" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
              Contact
            </Nav.Link>
          </Nav>

          <Button
            variant="primary"
            onClick={handleOrderNowClick}
            className="rounded-pill py-2 px-4 ms-3 nav-button-animate"
            style={{
              backgroundColor: '#0d6efd',
              color: '#fff',
              border: '1px solid #fff',
              transition: 'all 0.3s ease',
            }}
          >
            Order Now
          </Button>

          <Button
            variant="outline-light"
            onClick={handleVendorClick}
            className="rounded-pill py-2 px-4 ms-2 nav-button-animate"
            style={{
              backgroundColor: '#0d6efd',
              color: '#fff',
              border: '1px solid #fff',
              transition: 'all 0.3s ease',
            }}
          >
            Vendor Login
          </Button>

          <Button
            variant="outline-light"
            onClick={handleProfileClick}
            className="rounded-pill py-2 px-3 ms-2 nav-button-animate"
            style={{
              backgroundColor: '#0d6efd',
              color: '#fff',
              border: '1px solid #fff',
              transition: 'all 0.3s ease',
            }}
          >
            <FaUser />
          </Button>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>

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

export default Navbar;