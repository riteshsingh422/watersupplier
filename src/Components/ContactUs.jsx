import React, { useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactUs.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-us-container">
      {/* Header */}
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center text-white">Contact Us</h1>
        <p className="text-center">We’d love to hear from you! Reach out for inquiries or support.</p>
      </motion.div>

      {/* Contact Info & Form */}
      <Row className="justify-content-center align-items-center py-5">
        {/* Contact Info */}
        <Col md={4} className="contact-info" data-aos="fade-right">
          <div className="info-card">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h5>Our Location</h5>
                <p>123 Water Street, New York, USA</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h5>Email Us</h5>
                <p>info@aquanest.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h5>Call Us</h5>
                <p>+1-234-567-890</p>
              </div>
            </div>
          </div>

          <div className="social-links" data-aos="zoom-in">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </Col>

        {/* Contact Form */}
        <Col md={6} data-aos="fade-left">
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="text-black">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="text-black">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label className="text-black">Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" required />
              </Form.Group>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" type="submit" className="w-100 rounded-pill py-2">
                  Send Message
                </Button>
              </motion.div>
            </Form>
          </div>
        </Col>
      </Row>

      {/* WhatsApp Query Section with GIF */}
      <div className="whatsapp-query-section" data-aos="zoom-in-up">
        <img
          src="https://media.tenor.com/dI59fXazEUEAAAAi/question-mark-meaning.gif"
          alt="Any Questions?"
          className="whatsapp-gif"
        />
        <div className="whatsapp-query-content">
          <h4>Have any queries?</h4>
          <p>Reach out to us directly on WhatsApp for instant support and answers!</p>
          <a href="https://wa.me/1234567890" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="whatsapp-icon" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="wave-animation"></div>
    </div>
  );
};

export default ContactUs;
