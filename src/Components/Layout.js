import React from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { FaHandHoldingWater, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('vendorToken');
    navigate('/vendor-login');
  };

  return (
    <>
      <BootstrapNavbar bg="light" expand="lg" className="px-4 py-2 shadow-sm">
        <BootstrapNavbar.Brand href="/">
          <h1 className="text-primary m-0 d-flex align-items-center">
            <FaHandHoldingWater className="me-2" size={28} /> AquaNest
          </h1>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="outline-danger" onClick={handleLogout} className="d-flex align-items-center gap-2">
              <FaSignOutAlt />
              Logout
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
      <Container className="py-4">{children}</Container>
    </>
  );
};

export default Layout;
