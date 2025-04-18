import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import './Carousel.css';

const Carousel = ({ handleShow }) => {
  return (
    <div className="carousel-header">
      <BootstrapCarousel
        id="carouselId"
        ride="carousel"
        interval={3000}
        pause={false}
      >
        <BootstrapCarousel.Item>
          <img
            src="/img/carousel-1.jpg"
            className="img-fluid w-100"
            alt="Pure Water"
            onError={(e) => {
              e.target.src = 'https://source.unsplash.com/random/1920x1080?water,blue';
            }}
          />
          <BootstrapCarousel.Caption className="carousel-caption-custom">
            <div className="carousel-caption-content slide-from-left">
              <h4 className="text-white text-uppercase fw-bold mb-3">Pure Living</h4>
              <h1 className="display-3 text-capitalize text-white mb-4">
                Safe Water for a Healthier You
              </h1>
              <p className="mb-5 fs-5 text-white">
                Access clean, safe water to elevate your life. Quality you can trust, delivered with care.
              </p>
              <div className="carousel-caption-content-btn">
                <button
                  onClick={handleShow}
                  className="btn rounded-pill py-3 px-5 slide-from-left"
                  style={{
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    border: '1px solid #fff', // Match navbar border
                    transition: 'all 0.3s ease',
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            src="/img/carousel-2.jpg"
            className="img-fluid w-100"
            alt="Healthy Life"
            onError={(e) => {
              e.target.src = 'https://source.unsplash.com/random/1920x1080?water,wave';
            }}
          />
          <BootstrapCarousel.Caption className="carousel-caption-custom">
            <div className="carousel-caption-content slide-from-right">
              <h4 className="text-white text-uppercase fw-bold mb-3">Pure Living</h4>
              <h1 className="display-3 text-capitalize text-white mb-4">
                Safe Water for a Healthier You
              </h1>
              <p className="mb-5 fs-5 text-white">
                Access clean, safe water to elevate your life. Quality you can trust, delivered with care.
              </p>
              <div className="carousel-caption-content-btn">
                <button
                  onClick={handleShow}
                  className="btn rounded-pill py-3 px-5 slide-from-right"
                  style={{
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    border: '1px solid #fff', // Match navbar border
                    transition: 'all 0.3s ease',
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  );
};

export default Carousel;
