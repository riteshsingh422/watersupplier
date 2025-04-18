import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './OrderModal.css';

const OrderModal = ({ show, handleClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    product: '2L 1 Bottle',
    name: '',
    phone: '',
    address: '',
    quantity: 1,
    deliveryPartner: 'FastTrack Delivery',
  });
  const [watermarkAvailable, setWatermarkAvailable] = useState(true);

  useEffect(() => {
    if (show) {
      setStep(1);
      setFormData({
        product: '2L 1 Bottle',
        name: '',
        phone: '',
        address: '',
        quantity: 1,
        deliveryPartner: 'FastTrack Delivery',
      });
      const img = new Image();
      img.src = 'https://png.pngtree.com/png-clipart/20241208/original/pngtree-blue-water-drops-png-image_17736037.png';
      img.onload = () => setWatermarkAvailable(true);
      img.onerror = () => setWatermarkAvailable(false);
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmitStep2 = (e) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      animation
      dialogClassName="custom-modal"
      contentClassName="modal-content-fullscreen"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 text-center text-dark">
          <i className="fas fa-hand-holding-water me-2"></i> AquaNest Order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {step === 1 && (
          <div className="step-content">
            <div className="watermark-container">
              {watermarkAvailable ? (
                <>
                  <div className="watermark-drop" />
                  <div className="watermark-drop second" />
                </>
              ) : (
                <div className="watermark-fallback-text">Watermark not available</div>
              )}
            </div>

            <h4 className="text-dark mb-4 text-center">Select Product</h4>
            <Form onSubmit={handleSubmitStep1}>
              <Row className="g-4 justify-content-center">
                <Col xs={12} md={8}>
                  <Form.Group controlId="product">
                    <Form.Label className="text-dark">Choose Product</Form.Label>
                    <Form.Select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="bg-light text-dark"
                    >
                      <option value="2L 1 Bottle">2L 1 Bottle - Mineral Water ($35.00)</option>
                      <option value="4L 2 Bottles">4L 2 Bottles - RO Water ($70.00)</option>
                      <option value="6L 3 Bottles">6L 3 Bottles - UV Water ($100.00)</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={8}>
                  <Form.Group controlId="name">
                    <Form.Label className="text-dark">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-light text-dark"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={8}>
                  <Form.Group controlId="phone">
                    <Form.Label className="text-dark">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-light text-dark"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={8}>
                  <Form.Group controlId="address">
                    <Form.Label className="text-dark">Delivery Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Enter your delivery address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="bg-light text-dark"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={8}>
                  <Form.Group controlId="quantity">
                    <Form.Label className="text-dark">Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      value={formData.quantity}
                      name="quantity"
                      onChange={handleChange}
                      required
                      className="bg-light text-dark"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={8} className="text-center mt-5">
                  <Button variant="primary" type="submit" className="rounded-pill py-3 px-5">
                    Proceed to Delivery Partner
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        )}
        {step === 2 && (
          <div className="step-content">
            <div className="watermark-container">
              {watermarkAvailable ? (
                <>
                  <div className="watermark-drop" />
                  <div className="watermark-drop second" />
                </>
              ) : (
                <div className="watermark-fallback-text">Watermark not available</div>
              )}
            </div>

            <h4 className="text-dark mb-4 text-center">Select Delivery Partner</h4>
            <Form onSubmit={handleSubmitStep2}>
              <Row className="g-4 justify-content-center">
                <Col xs={12} md={8}>
                  <Form.Check
                    type="radio"
                    name="deliveryPartner"
                    id="partner1"
                    value="FastTrack Delivery"
                    checked={formData.deliveryPartner === 'FastTrack Delivery'}
                    onChange={handleChange}
                    label="FastTrack Delivery - Same-day delivery available"
                  />
                </Col>
                <Col xs={12} md={8}>
                  <Form.Check
                    type="radio"
                    name="deliveryPartner"
                    id="partner2"
                    value="AquaExpress"
                    checked={formData.deliveryPartner === 'AquaExpress'}
                    onChange={handleChange}
                    label="AquaExpress - Next-day delivery guaranteed"
                  />
                </Col>
                <Col xs={12} md={8}>
                  <Form.Check
                    type="radio"
                    name="deliveryPartner"
                    id="partner3"
                    value="EcoFreight"
                    checked={formData.deliveryPartner === 'EcoFreight'}
                    onChange={handleChange}
                    label="EcoFreight - Eco-friendly delivery options"
                  />
                </Col>
                <Col xs={12} md={8} className="mt-5">
                  <div className="button-flex">
                    <Button variant="primary" type="submit" className="rounded-pill py-3 px-5 me-2">
                      Confirm Order
                    </Button>
                    <Button variant="secondary" onClick={handleBack} className="rounded-pill py-3 px-5">
                      Back
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        )}
        {step === 3 && (
          <div className="step-content text-center">
            <h4 className="text-dark mb-4">Order Placed Successfully!</h4>
            <p className="fs-5 mb-4 text-dark">
              Thank you for your order with AquaNest. You'll receive a confirmation soon with your delivery details.
            </p>
            <Button variant="primary" onClick={handleClose} className="rounded-pill py-3 px-5">
              Return to Home
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
