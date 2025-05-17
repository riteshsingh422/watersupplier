import React, { useEffect } from 'react';
import { FaCode, FaCogs, FaServer, FaLightbulb } from 'react-icons/fa';
import './Feature.css';

const Feature = () => {
  useEffect(() => {
    const featureItems = document.querySelectorAll('.feature-item');
    const headerText = document.querySelectorAll('.text-center h1, .text-center h4');

    const handleScroll = () => {
      featureItems.forEach((item) => {
        if (item && item.getBoundingClientRect) {
          if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add('animate-up');
          } else {
            item.classList.remove('animate-up');
          }
        }
      });

      headerText.forEach((text) => {
        if (text && text.getBoundingClientRect) {
          if (text.getBoundingClientRect().top < window.innerHeight) {
            text.classList.add('animate-up');
          } else {
            text.classList.remove('animate-up');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase mb-3" style={{ color: '#ffe600' }}>
            Why Choose <span style={{ color: 'red' }}>INSABHI</span>
          </h4>
          <h1 className="display-4 text-capitalize mb-4">
            Trusted Excellence in IT Solutions
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="feature-item p-4">
            <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                <FaCode className="fa-3x spin-icon" style={{ color: 'red' }} />
              </div>
              <h4 className="mb-3">Custom Software Development</h4>
              <p className="mb-4">
                Tailored software solutions designed to meet your unique business needs with precision.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="feature-item p-4">
            <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                <FaCogs className="fa-3x spin-icon" style={{ color: 'red' }} />
              </div>
              <h4 className="mb-3">Odoo ERP Implementation</h4>
              <p className="mb-4">
                Streamlined ERP solutions to optimize your business processes and boost efficiency.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="feature-item p-4">
            <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                <FaServer className="fa-3x spin-icon" style={{ color: 'red' }} />
              </div>
              <h4 className="mb-3">Scalable IT Infrastructure</h4>
              <p className="mb-4">
                Robust and scalable IT systems to support your growth and digital transformation.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="feature-item p-4">
            <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                <FaLightbulb className="fa-3x spin-icon" style={{ color: 'red' }} />
              </div>
              <h4 className="mb-3">Innovative Technology Consulting</h4>
              <p className="mb-4">
                Expert guidance to leverage cutting-edge technologies for competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;