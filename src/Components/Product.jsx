import React, { useEffect, useRef } from 'react';
import './Product.css';

const Portfolio = () => {
  const sectionRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (sectionRef.current) {
          sectionRef.current.classList.add('fadeInSection');
        }
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
          if (item && item.classList) {
            item.classList.add('slideInTop');
            item.style.transitionDelay = `${index * 0.2}s`;
          }
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.05,
      rootMargin: '0px',
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      // Ensure visibility on all devices
      sectionRef.current.classList.add('fadeInSection');
      document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        item.classList.add('slideInTop');
        item.style.transitionDelay = `${index * 0.2}s`;
      });
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const portfolioData = [
    { src: '/img/proj1.png', href: 'https://www.bellabathwares.com/', name: 'Bella' },
    { src: '/img/proj2.png', href: 'https://chillopositefestival.com/', name: 'Chilloposite Festival' },
    { src: '/img/proj3.png', href: 'https://falcann.com/', name: 'Falcann' },
    { src: '/img/proj4.png', href: 'https://archisesto.com/', name: 'Archisesto' },
    { src: '/img/proj5.png', href: 'https://starkengineering.in/', name: 'Stark Engineering Pvt. Ltd' },
    { src: '/img/proj6.png', href: 'https://mexstarch.com/', name: 'Mex Starch' },
  ];

  return (
    <div className="container-fluid portfolio py-5" ref={sectionRef} style={{ minHeight: '200px' }}>
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase">Our Portfolio</h4>
          <h1 className="display-3 text-capitalize mb-3">Showcasing Our Best Projects</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {portfolioData.map((item, index) => (
            <div className="col-12 col-sm-12 col-lg-6 col-xl-4" key={index}>
              <div className="portfolio-item">
                <img
                  className="portfolio-image img-fluid w-100 rounded-top"
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Image failed to load: ${item.src}`, {
                      error: e.message,
                      src: e.target.currentSrc,
                      userAgent: navigator.userAgent,
                      index: index,
                      name: item.name,
                      networkStatus: navigator.onLine ? 'Online' : 'Offline',
                    });
                  }}
                />
                <div className="portfolio-content bg-light text-center rounded-bottom p-4">
                  <a href={item.href} target="_blank" className="project-name">{item.name}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
