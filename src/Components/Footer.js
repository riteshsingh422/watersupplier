import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid footer py-3 wow fadeIn" data-wow-delay="0.2s" style={{ background: 'linear-gradient(135deg, #2d2d2d, #1a1a1a)' }}>
      <div className="container py-3">
        <div className="row g-4 mb-4 align-items-center">
          <div className="col-lg-7">
            <div className="position-relative mx-auto subscribe-form">
              <input
                className="form-control rounded-pill w-100 py-2 ps-4 pe-5"
                type="text"
                placeholder="Email address to Subscribe"
              />
              <button
                type="button"
                className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-1 px-3 mt-1 me-1"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end social-icons">
              <div className="d-flex flex-column align-items-center">
                <a href="https://www.facebook.com/insabhi24/" target='_blank' className="btn btn-primary btn-md-square rounded-circle me-3 social-icon">
                  <FaFacebookF style={{ color: '#1877F2' }} />
                </a>
                <span className="text-light mt-1" style={{ fontSize: '0.8rem' }}>Facebook</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href="https://x.com/Insabhi24" target='_blank' className="btn btn-primary btn-md-square rounded-circle me-3 social-icon">
                  <FaTwitter style={{ color: '#1DA1F2' }} />
                </a>
                <span className="text-light mt-1" style={{ fontSize: '0.8rem' }}>Twitter</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href="https://www.instagram.com/insabhi24/" target='_blank' className="btn btn-primary btn-md-square rounded-circle me-3 social-icon">
                  <FaInstagram style={{ color: '#D62976' }} />
                </a>
                <span className="text-light mt-1" style={{ fontSize: '0.8rem' }}>Instagram</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href="https://in.linkedin.com/company/insabhi" target='_blank' className="btn btn-primary btn-md-square rounded-circle me-0 social-icon">
                  <FaLinkedinIn style={{ color: '#0A66C2' }} />
                </a>
                <span className="text-light mt-1" style={{ fontSize: '0.8rem' }}>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <img src="/img/logo.png" alt="Logo" className="footer-logo" />
                <p className="text-dark mb-3">
                  Insabhi — empowering your business with cutting-edge IT solutions. We specialize in software development, cloud services, and digital transformation to drive innovation and growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-3 footer-title">About Us</h4>
              <a href="#about" className="text-light footer-link"><FaAngleRight className="me-2" /> About Us</a>
              <a href="#service" className="text-light footer-link"><FaAngleRight className="me-2" /> Services</a>
              <a href="#contact" className="text-light footer-link"><FaAngleRight className="me-2" /> Contact Us</a>
              <a href="#gallery" className="text-light footer-link"><FaAngleRight className="me-2" /> Gallery</a>
              <a href="#" className="text-light footer-link"><FaAngleRight className="me-2" /> Terms & Conditions</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-3 footer-title">Contact Info</h4>
              <a href="#" className="text-light footer-link"><FaMapMarkerAlt className="me-2" /> Ukhra, West Bengal 713363</a>
              <a href="mailto:info@example.com" className="text-light footer-link"><FaEnvelope className="me-2" /> info@insabhi.com</a>
              <a href="tel:+012 345 67890" className="text-light footer-link"><FaPhone className="me-2" /> +917908156500</a>
              <a href="tel:+012 345 67890" className="text-light footer-link mb-3"><FaPrint className="me-2" /> +919990133483</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-light">Powered by INSABHI</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0 text-light">All Rights Reserved © {currentYear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;