import React from 'react';
import { FaHandHoldingWater, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5 mb-5 align-items-center">
          <div className="col-lg-7">
            <div className="position-relative mx-auto subscribe-form">
              <input
                className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Email address to Subscribe"
              />
              <button
                type="button"
                className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end social-icons">
              <a href="#" className="btn btn-primary btn-md-square rounded-circle me-3 social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-primary btn-md-square rounded-circle me-3 social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="btn btn-primary btn-md-square rounded-circle me-3 social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-primary btn-md-square rounded-circle me-0 social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <h3 className="text-white mb-4 footer-logo">
                  <FaHandHoldingWater className="text-primary me-3" /> AquaNest
                </h3>
                <p className="text-light mb-3">
                AquaNest — delivering purity, trust, and innovation in every drop. Your reliable source for clean, healthy water solutions.
                </p>
              </div>
              <div className="position-relative mt-3">
                <input
                  className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4 footer-title">About Us</h4>
              <a href="#" className="text-light footer-link"><FaAngleRight className="me-2" /> Why Choose Us</a>
              <a href="#" className="text-light footer-link"><FaAngleRight className="me-2" /> Free Water Bottles</a>
              <a href="#" className="text-light footer-link"><FaAngleRight className="me-2" /> Water Dispensers</a>
              <a href="#" className="text-light footer-link"><FaAngleRight className="me-2" /> Bottled Water Coolers</a>
              <a href="#" className="text-light footer-link"><FaAngleRight className="me-2" /> Contact Us</a>
              <a href="#" className="text-light footer-link"><FaAngleRight className="me-2" /> Terms & Conditions</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4 footer-title">Business Hours</h4>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Mon - Friday:</h6>
                <p className="text-white mb-0">09.00 am to 07.00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Saturday:</h6>
                <p className="text-white mb-0">10.00 am to 05.00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Vacation:</h6>
                <p className="text-white mb-0">All Sunday is our vacation</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4 footer-title">Contact Info</h4>
              <a href="#" className="text-light footer-link"><FaMapMarkerAlt className="me-2" /> 123 Street, New York, USA</a>
              <a href="mailto:info@example.com" className="text-light footer-link"><FaEnvelope className="me-2" /> info@example.com</a>
              <a href="mailto:info@example.com" className="text-light footer-link"><FaEnvelope className="me-2" /> info@example.com</a>
              <a href="tel:+012 345 67890" className="text-light footer-link"><FaPhone className="me-2" /> +012 345 67890</a>
              <a href="tel:+012 345 67890" className="text-light footer-link mb-3"><FaPrint className="me-2" /> +012 345 67890</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;