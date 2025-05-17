import React, { useEffect, useRef } from 'react';
import { FaCode, FaCogs, FaLightbulb, FaServer, FaUsers, FaClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: false });

    // Counter animation
    const counters = [
      { element: null, target: 422, speed: 5 }, // Satisfied Clients
      { element: null, target: 513, speed: 5 }, // Projects Delivered
      { element: null, target: 53, speed: 20 }, // Team Members
      { element: null, target: 10, speed: 20 }, // Years Experience
    ];

    // Find counter elements
    const counterElements = counterRef.current?.querySelectorAll('.counter-counting span:first-child') || [];
    if (counterElements.length !== counters.length) {
      console.warn('Mismatch in counter elements:', counterElements.length, 'expected:', counters.length);
      return;
    }
    counters.forEach((counter, index) => {
      counter.element = counterElements[index];
    });

    const animateCounters = () => {
      counters.forEach((counter) => {
        let count = 0;
        const duration = 2500; // 2.5s total duration
        const increment = counter.target / (duration / counter.speed);
        const updateCounter = () => {
          count += increment;
          if (count < counter.target) {
            counter.element.textContent = Math.ceil(count);
            requestAnimationFrame(updateCounter);
          } else {
            counter.element.textContent = counter.target;
          }
        };
        updateCounter();
      });
    };

    // IntersectionObserver to trigger animation when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div
            className="col-xl-6 about-img-wrapper"
            data-aos="fade-right"
          >
            <div className="about-exp badge text-white" style={{ backgroundColor: '#ffe600' }}>
              <span>10+ Years of Excellence</span>
            </div>
            <div className="about-img rounded overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQHGG4J6b6OmyQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709674937953?e=2147483647&v=beta&t=tgAv-o8rHSfUFWzGQT2nCOfZkc2Hdluh-9xTR3Opu-w"
                className="img-fluid rounded w-100"
                style={{ objectFit: 'cover' }}
                alt="INSABHI IT Solutions"
                onError={(e) => {
                  e.target.src = 'https://source.unsplash.com/random/600x600?technology';
                }}
              />
            </div>
          </div>
          <div
            className="col-xl-6 about-content"
            data-aos="fade-left"
          >
            <div className="about-item">
              <h4 className="text-uppercase mb-3" style={{ color: '#ffe600' }}>
                About <span style={{ color: 'red' }}>INSABHI</span>
              </h4>
              <h1 className="display-4 mb-4">Delivering Innovative IT Solutions</h1>
              <p className="mb-4">
                At <span style={{ color: 'red' }}>INSABHI</span>, we’re committed to providing cutting-edge software and ERP solutions through innovation and expertise.
              </p>

              <div className="about-card bg-light rounded p-4 mb-4" data-aos="fade-left">
                <div className="d-flex align-items-center">
                  <div className="about-icon-wrapper me-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                      <FaCode className="fa-2x icon-hover" style={{ color: 'red' }} />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-3">Trusted by Businesses</h5>
                    <p className="mb-0">
                      Our clients rely on us for consistent quality and exceptional software solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-card bg-light rounded p-4 mb-4" data-aos="fade-left">
                <div className="d-flex align-items-center">
                  <div className="about-icon-wrapper me-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                      <FaCogs className="fa-2x icon-hover" style={{ color: 'red' }} />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-3">Premium IT Standards</h5> {/* Fixed syntax and restored original text */}
                    <p className="mb-0">
                      We uphold rigorous standards to deliver ERP and software solutions that drive success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fact Counter Section */}
      <div className="counter py-5" ref={counterRef}>
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-right">
            <div className="counter-item">
              <div className="counter-item-icon mx-auto" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <FaLightbulb className="fa-3x" style={{ color: 'red' }} />
              </div>
              <h4 className="text-white my-4">Satisfied Clients</h4>
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">0</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-right" data-aos-delay="100">
            <div className="counter-item">
              <div className="counter-item-icon mx-auto" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                <FaServer className="fa-3x" style={{ color: 'red' }} />
              </div>
              <h4 className="text-white my-4">Projects Delivered</h4>
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">0</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-right" data-aos-delay="200">
            <div className="counter-item">
              <div className="counter-item-icon mx-auto" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                <FaUsers className="fa-3x" style={{ color: 'red' }} />
              </div>
              <h4 className="text-white my-4">Team Members</h4>
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">0</span>
                <span className="h1 fw-bold text-white">+</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-right" data-aos-delay="300">
            <div className="counter-item">
              <div className="counter-item-icon mx-auto" style={{background: 'linear-gradient(135deg, #ffe600,rgb(219, 88, 0))'}}>
                <FaClock className="fa-3x" style={{ color: 'red' }} />
              </div>
              <h4 className="text-white my-4">Years Experience</h4>
              <div className="counter-counting">
                <span className="text-white fs-2 fw-bold">0</span>
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
