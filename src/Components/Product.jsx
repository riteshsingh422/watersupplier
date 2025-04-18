import React, { useEffect, useRef } from 'react';
import './Product.css';

const Product = () => {
  const sectionRef = useRef(null); // For observing the section visibility
  const productItems = useRef([]); // Ref to hold product items

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Ensure sectionRef is available
        if (sectionRef.current) {
          sectionRef.current.classList.add('fadeInSection');
        }

        // Ensure productItems are available before interacting with them
        productItems.current.forEach(item => {
          if (item && item.classList) {
            item.classList.add('fadeInProduct');
          }
        });
      } else {
        // Ensure sectionRef is available
        if (sectionRef.current) {
          sectionRef.current.classList.remove('fadeInSection');
        }

        // Ensure productItems are available before interacting with them
        productItems.current.forEach(item => {
          if (item && item.classList) {
            item.classList.remove('fadeInProduct');
          }
        });
      }
    });
  };

  useEffect(() => {
    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Ensure the ref for the section is valid before observing
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe product items as well (they should be populated on render)
    const productElements = document.querySelectorAll('.product-item');
    productElements.forEach(element => {
      productItems.current.push(element);
      observer.observe(element); // Observe each product item
    });

    // Cleanup observer when component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      productItems.current.forEach(item => {
        observer.unobserve(item); // Stop observing each product item
      });
    };
  }, []);

  return (
    <div className="container-fluid product py-5" ref={sectionRef} style={{ border: '2px solid red', minHeight: '200px' }}>
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase text-primary">Our Products</h4>
          <h1 className="display-3 text-capitalize mb-3">We Deliver Best Quality Bottle Packs.</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 col-xl-4">
            <div className="product-item">
              <img src="/img/product-3.png" className="product-image img-fluid w-100 rounded-top" alt="2L 1 Bottle" />
              <div className="product-content bg-light text-center rounded-bottom p-4">
                <p>2L 1 Bottle</p>
                <a href="#" className="h4 d-inline-block mb-3">Mineral Water Bottle</a>
                <p className="fs-4 text-primary mb-3">$35:00</p>
                <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4">
            <div className="product-item">
              <img src="/img/product-2.png" className="product-image img-fluid w-100 rounded-top" alt="4L 2 Bottles" />
              <div className="product-content bg-light text-center rounded-bottom p-4">
                <p>4L 2 Bottles</p>
                <a href="#" className="h4 d-inline-block mb-3">RO Water Bottle</a>
                <p className="fs-4 text-primary mb-3">$70:00</p>
                <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4">
            <div className="product-item">
              <img src="/img/product-1.png" className="product-image img-fluid w-100 rounded-top" alt="6L 3 Bottles" />
              <div className="product-content bg-light text-center rounded-bottom p-4">
                <p>6L 3 Bottles</p>
                <a href="#" className="h4 d-inline-block mb-3">UV Water Bottle</a>
                <p className="fs-4 text-primary mb-3">$100:00</p>
                <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
