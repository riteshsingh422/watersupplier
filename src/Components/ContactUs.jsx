import React, { useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
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
        <h1 className="text-center ">Contact Us</h1>
        <p className="text-center">We’d love to hear from you! Reach out for inquiries or support.</p>
      </motion.div>

      {/* Map & Form */}
      <Row className="justify-content-center align-items-center py-5">
        {/* Embedded Map */}
        <Col md={4} data-aos="fade-right">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.6793138345492!2d87.23969317556156!3d23.651652978737854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76b0066f418f3%3A0xe2d2b39e8b1628d8!2sINSABHI%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1747434141258!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of INSABHI PVT LTD, Ukhra, West Bengal 713363"
            ></iframe>
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
              <Button
                  type="submit"
                  className="w-100 rounded-pill py-2"
                  style={{ background: 'linear-gradient(135deg, #ffe600, rgb(219, 88, 0))', color: 'white' }}
                >
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
            <p>Reach out to us directly on Email!</p>
            <a
              href="mailto:info@insabhi.com"
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="Email-icon" />
              Mail Us
            </a>
          </div>
      </div>

      <div className="wave-animation"></div>
    </div>
  );
};

export default ContactUs;