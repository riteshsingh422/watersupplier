import React, { useEffect } from 'react';
import { FaTint, FaFaucet } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div
            className="col-xl-6 about-img-wrapper"
            data-aos="fade-right"
          >
            <div className="about-exp badge bg-primary text-white">
              <span>20+ Years of Excellence</span>
            </div>
            <div className="about-img rounded overflow-hidden">
              <img
                src="/img/about.jpg"
                className="img-fluid rounded w-100"
                style={{ objectFit: 'cover' }}
                alt="Acuas Water Purity"
                onError={(e) => {
                  e.target.src = 'https://source.unsplash.com/random/600x600?water';
                }}
              />
            </div>
          </div>
          <div
            className="col-xl-6 about-content"
            data-aos="fade-left"
          >
            <div className="about-item">
              <h4 className="text-primary text-uppercase mb-3">About AquaNest</h4>
              <h1 className="display-4 mb-4">Delivering Pure Water, Always</h1>
              <p className="mb-4">
                At Acuas, we’re committed to providing the highest quality water through innovation and care.
              </p>

              <div className="about-card bg-light rounded p-4 mb-4" data-aos="fade-left">
                <div className="d-flex align-items-center">
                  <div className="about-icon-wrapper me-4">
                    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center">
                      <FaTint className="text-white fa-2x icon-hover" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-3">Trusted by Thousands</h5>
                    <p className="mb-0">
                      Our customers rely on us for consistent quality and exceptional service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-card bg-light rounded p-4 mb-4" data-aos="fade-left">
                <div className="d-flex align-items-center">
                  <div className="about-icon-wrapper me-4">
                    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center">
                      <FaFaucet className="text-white fa-2x icon-hover" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-3">Premium Standards</h5>
                    <p className="mb-0">
                      We uphold rigorous standards to deliver water that’s as pure as nature intended.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Fact Counter Section */}
      <div className="counter py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-right">
            <div className="counter-item">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-thumbs-up fa-3x text-white"></i>
              </div>
              <h4 className="text-white my-4">Happy Clients</h4>
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">456</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-right" data-aos-delay="100">
            <div className="counter-item">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-truck fa-3x text-white"></i>
              </div>
              <h4 className="text-white my-4">Transport</h4>
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">513</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-right" data-aos-delay="200">
            <div className="counter-item">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-users fa-3x text-white"></i>
              </div>
              <h4 className="text-white my-4">Employees</h4>
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">53</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-right" data-aos-delay="300">
            <div className="counter-item">
              <div className="counter-item-icon mx-auto">
                <i className="fas fa-heart fa-3x text-white"></i>
              </div>
              <h4 className="text-white my-4">Years Experience</h4>
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">17</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
