import React, { useEffect } from 'react';
import { FaHandHoldingWater, FaFilter, FaRecycle, FaMicroscope } from 'react-icons/fa';
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
            item.classList.remove('animate-up'); // Remove the animation class when out of view
          }
        }
      });

      headerText.forEach((text) => {
        if (text && text.getBoundingClientRect) {
          if (text.getBoundingClientRect().top < window.innerHeight) {
            text.classList.add('animate-up');
          } else {
            text.classList.remove('animate-up'); // Remove the animation class when out of view
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user loads the page and the content is already visible
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase text-primary mb-3">Why Choose AquaNest</h4>
          <h1 className="display-4 text-capitalize mb-4">
            Trusted Excellence in Bottled Water
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="feature-item p-4">
              <div className="feature-icon mb-4">
                <FaHandHoldingWater className="text-white fa-3x spin-icon" />
              </div>
              <h4 className="mb-3">Rigorous Quality Checks</h4>
              <p className="mb-4">
                Every drop is tested to ensure unmatched purity and safety for your peace of mind.
              </p>
              <a href="#" className="btn btn-outline-primary rounded-pill py-2 px-4">
                Learn More <i className="fa fa-angle-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="feature-item p-4">
              <div className="feature-icon mb-4">
                <FaFilter className="text-white fa-3x spin-icon" />
              </div>
              <h4 className="mb-3">Advanced 5-Step Filtration</h4>
              <p className="mb-4">
                Our cutting-edge process removes impurities, delivering crisp, clean water every time.
              </p>
              <a href="#" className="btn btn-outline-primary rounded-pill py-2 px-4">
                Learn More <i className="fa fa-angle-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="feature-item p-4">
              <div className="feature-icon mb-4">
                <FaRecycle className="text-white fa-3x spin-icon" />
              </div>
              <h4 className="mb-3">Eco-Friendly Composition</h4>
              <p className="mb-4">
                Sustainable materials and processes ensure our water is kind to both you and the planet.
              </p>
              <a href="#" className="btn btn-outline-primary rounded-pill py-2 px-4">
                Learn More <i className="fa fa-angle-right ms-2"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="feature-item p-4">
              <div className="feature-icon mb-4">
                <FaMicroscope className="text-white fa-3x spin-icon" />
              </div>
              <h4 className="mb-3">Strict Lab Control</h4>
              <p className="mb-4">
                State-of-the-art labs monitor quality, guaranteeing water that meets the highest standards.
              </p>
              <a href="#" className="btn btn-outline-primary rounded-pill py-2 px-4">
                Learn More <i className="fa fa-angle-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
