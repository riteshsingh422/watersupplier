import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const Navbar = ({ scrollToAbout, scrollToService, scrollToContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
          <img
            src="/img/logo.png"
            alt="Your Logo"
            className="navbar-logo"
            style={{ height: '40px' }}
          />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="navbarCollapse"
          className={`custom-toggler ${isOpen ? 'open' : ''}`}
          onClick={handleToggle}
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto py-0">
            <Nav.Link href="/" active className="nav-link-custom nav-link-animate">
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-link-custom nav-link-animate"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
                setIsOpen(false);
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#service"
              className="nav-link-custom nav-link-animate"
              onClick={(e) => {
                e.preventDefault();
                scrollToService();
                setIsOpen(false);
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#gallery"
              className="nav-link-custom nav-link-animate"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav-link-custom nav-link-animate"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
                setIsOpen(false);
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;