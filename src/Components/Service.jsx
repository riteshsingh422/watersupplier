import React, { useEffect } from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingWater, faDumpsterFire, faFilter, faAssistiveListeningSystems, faRecycle, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // trigger every time
    });
  }, []);

  return (
    <div className="container-fluid service bg-light overflow-hidden py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" data-aos="fade-up" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase text-primary">Our Service</h4>
          <h1 className="display-3 text-capitalize mb-3">Protect Your Family with Best Water</h1>
        </div>
        <div className="row gx-0 gy-4 align-items-center">
          
          {/* Left Side Cards */}
          <div className="col-lg-6 col-xl-4">
            <div className="service-item rounded p-4 mb-4" data-aos="fade-left">
              <div className="d-flex">
                <div className="service-content text-end">
                  <a href="#" className="h4 d-inline-block mb-3">Residential Waters</a>
                  <p className="mb-0">Reliable residential water supply delivering clean, fresh water daily for safe and comfortable living.</p>
                </div>
                <div className="ps-4">
                  <div className="service-btn">
                    <FontAwesomeIcon icon={faHandHoldingWater} className="text-white fa-2x" />
                  </div>
                </div>
              </div>
            </div>
            <div className="service-item rounded p-4 mb-4" data-aos="fade-left" data-aos-delay="100">
              <div className="d-flex">
                <div className="service-content text-end">
                  <a href="#" className="h4 d-inline-block mb-3">Commercial Waters</a>
                  <p className="mb-0">Trusted water solutions tailored for commercial needs, ensuring uninterrupted flow and top-quality.</p>
                </div>
                <div className="ps-4">
                  <div className="service-btn">
                    <FontAwesomeIcon icon={faDumpsterFire} className="text-white fa-2x" />
                  </div>
                </div>
              </div>
            </div>
            <div className="service-item rounded p-4 mb-0" data-aos="fade-left" data-aos-delay="200">
              <div className="d-flex">
                <div className="service-content text-end">
                  <a href="#" className="h4 d-inline-block mb-3">Filtration Plants</a>
                  <p className="mb-0">High-performance filtration systems providing pure, contaminant-free water with long-term efficiency and environmental focus.</p>
                </div>
                <div className="ps-4">
                  <div className="service-btn">
                    <FontAwesomeIcon icon={faFilter} className="text-white fa-2x" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottle Image (No animation) */}
          <div className="col-lg-6 col-xl-4">
            <div className="bg-transparent bottle-container">
              <img src="/img/water.png" className="img-fluid w-100 bottle-float" alt="Water Bottle" />
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="col-lg-6 col-xl-4">
            <div className="service-item rounded p-4 mb-4" data-aos="fade-right">
              <div className="d-flex">
                <div className="pe-4">
                  <div className="service-btn">
                    <FontAwesomeIcon icon={faAssistiveListeningSystems} className="text-white fa-2x" />
                  </div>
                </div>
                <div className="service-content">
                  <a href="#" className="h4 d-inline-block mb-3">Water Softening</a>
                  <p className="mb-0">Advanced water softening solutions eliminate hardness, extending appliance life and improving water quality.</p>
                </div>
              </div>
            </div>
            <div className="service-item rounded p-4 mb-4" data-aos="fade-right" data-aos-delay="100">
              <div className="d-flex">
                <div className="pe-4">
                  <div className="service-btn">
                    <FontAwesomeIcon icon={faRecycle} className="text-white fa-2x" />
                  </div>
                </div>
                <div className="service-content">
                  <a href="#" className="h4 d-inline-block mb-3">Market Research</a>
                  <p className="mb-0">Insightful market research identifying trends and opportunities to guide smart, growth-driven business decisions.</p>
                </div>
              </div>
            </div>
            <div className="service-item rounded p-4 mb-0" data-aos="fade-right" data-aos-delay="200">
              <div className="d-flex">
                <div className="pe-4">
                  <div className="service-btn">
                    <FontAwesomeIcon icon={faProjectDiagram} className="text-white fa-2x" />
                  </div>
                </div>
                <div className="service-content">
                  <a href="#" className="h4 d-inline-block mb-3">Project Planning</a>
                  <p className="mb-0">Detailed project planning ensures smooth execution, resource efficiency, and timely completion of every solution.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>      
    </div>
  );
};

export default Service;
