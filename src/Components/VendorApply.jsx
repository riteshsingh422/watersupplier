import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './VendorApply.css';

const VendorApply = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, businessName, phone, address, password, confirmPassword } = formData;

    if (!name || !email || !businessName || !phone || !address || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      onSuccess(); // Redirect or close modal
    }, 2000);
  };

  return (
    <Modal show={true} onHide={onClose} centered size="lg" backdrop="static">
      <motion.div
        className="vendor-apply-modal"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="wave-animation"></div>

        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Apply to Become a Vendor</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxHeight: '65vh', overflowY: 'auto' }}>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Application submitted! Redirecting to login...</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formBusinessName" className="mb-3">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter your business name"
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Business Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your business address"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a password"
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="w-100 rounded-pill py-2 fs-5"
            >
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </motion.div>
    </Modal>
  );
};

export default VendorApply;
