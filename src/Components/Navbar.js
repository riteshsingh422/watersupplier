import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { FaHandHoldingWater, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleShow, scrollToAbout, scrollToService, scrollToContact }) => {
  const [scrolled, setScrolled] = useState(false);
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
            onClick={handleShow}
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
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
