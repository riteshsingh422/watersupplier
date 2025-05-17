import React, { useEffect, useState } from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faServer, faLightbulb, faDatabase, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { name: 'Web Development', image: 'https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg' },
    { name: 'Odoo Development', image: 'https://www.magictechnolabs.com/assets/images/odoo.webp' },
    { name: 'DevOps', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPOHDgzU8JVZ9d0qgeBzuOM1-uCCIl7dhCFOa-m5ILfb-_7PSg3FD2ORMNu1PJLkehhA&usqp=CAU' },
    { name: 'App Development', image: 'https://thecustomizewindows.cachefly.net/wp-content/uploads/2024/10/An-Overview-of-App-Development-Project-Management.png' },
    { name: 'Artificial Intelligence', image: 'https://urbeuniversity.edu/post_assets/Le9zsr8bQmv7gmZW40UXiVaPsGcpVwaY65mw28tU.webp' },
    { name: 'SEO Service', image: 'https://www.webhopers.com/wp-content/uploads/2022/03/Top-SEO-Company-in-Vadodara.webp' },
  ];

  return (
    <div className="container-fluid service bg-light overflow-hidden py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" data-aos="fade-up" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase" style={{ color: '#ffe600' }}>Our Services</h4>
          <h1 className="display-3 text-capitalize mb-3">
            Empower Your Business with <span style={{ color: 'red' }}>INSABHI</span>
          </h1>
        </div>
        <div className="row gx-0 gy-4 align-items-center">
          {/* Left Side Cards */}
          <div className="col-lg-6 col-xl-4">
            <div className="service-item rounded p-4 mb-4" data-aos="fade-left">
              <div className="d-flex">
                <div className="service-content text-end">
                  <a href="#" className="h4 d-inline-block mb-3">Custom Software Development</a>
                  <p className="mb-0">Tailored software solutions to meet your business needs, ensuring scalability and efficiency.</p>
                </div>
                <div className="ps-4">
                  <div className="service-btn" style={{ background: 'linear-gradient(135deg, #ffe600, rgb(219, 88, 0))' }}>
                    <FontAwesomeIcon icon={faCode} className="fa-2x" style={{ color: 'red' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="service-item rounded p-4 mb-4" data-aos="fade-left" data-aos-delay="100">
              <div className="d-flex">
                <div className="service-content text-end">
                  <a href="#" className="h4 d-inline-block mb-3">Odoo ERP Integration</a>
                  <p className="mb-0">Streamlined ERP solutions to optimize processes and drive business growth.</p>
                </div>
                <div className="ps-4">
                  <div className="service-btn" style={{ background: 'linear-gradient(135deg, #ffe600, rgb(219, 88, 0))' }}>
                    <FontAwesomeIcon icon={faCogs} className="fa-2x" style={{ color: 'red' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="service-item rounded p-4 mb-0" data-aos="fade-left" data-aos-delay="200">
              <div className="d-flex">
                <div className="service-content text-end">
                  <a href="#" className="h4 d-inline-block mb-3">Cloud Solutions</a>
                  <p className="mb-0">Robust cloud infrastructure for secure, scalable, and efficient IT operations.</p>
                </div>
                <div className="ps-4">
                  <div className="service-btn" style={{ background: 'linear-gradient(135deg, #ffe600, rgb(219, 88, 0))' }}>
                    <FontAwesomeIcon icon={faServer} className="fa-2x" style={{ color: 'red' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Technology Boxes */}
          <div className="col-lg-6 col-xl-4">
            <div className="tech-container">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="tech-box"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                  onTouchStart={() => setHoveredTech(index)}
                  onTouchEnd={() => setHoveredTech(null)}
                >
                  <span className="tech-name">{tech.name}</span>
                  <div
                    className={`tech-popup ${index % 2 === 0 ? 'slide-left' : 'slide-right'} ${
                      hoveredTech === index ? 'visible' : ''
                    }`}
                  >
                    <img
                      src={tech.image}
                      className="tech-popup-image"
                      alt={tech.name}
                      onError={(e) => {
                        e.target.src = 'https://source.unsplash.com/random/600x600?technology';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="col-lg-6 col-xl-4">
            <div className="service-item rounded p-4 mb-4" data-aos="fade-right">
              <div className="d-flex">
                <div className="pe-4">
                  <div className="service-btn" style={{ background: 'linear-gradient(135deg, #ffe600, rgb(219, 88, 0))' }}>
                    <FontAwesomeIcon icon={faLightbulb} className="fa-2x" style={{ color: 'red' }} />
                  </div>
                </div>
                <div className="service-content">
                  <a href="#" className="h4 d-inline-block mb-3">Technology Consulting</a>
                  <p className="mb-0">Expert guidance to leverage cutting-edge technologies for competitive advantage.</p>
                </div>
              </div>
            </div>
            <div className="service-item rounded p-4 mb-4" data-aos="fade-right" data-aos-delay="100">
              <div className="d-flex">
                <div className="pe-4">
                  <div className="service-btn" style={{ background: 'linear-gradient(135deg, #ffe600, rgb(219, 88, 0))' }}>
                    <FontAwesomeIcon icon={faDatabase} className="fa-2x" style={{ color: 'red' }} />
                  </div>
                </div>
                <div className="service-content">
                  <a href="#" className="h4 d-inline-block mb-3">Data Analytics</a>
                  <p className="mb-0">Advanced analytics to uncover insights and drive data-informed business decisions.</p>
                </div>
              </div>
            </div>
            <div className="service-item rounded p-4 mb-0" data-aos="fade-right" data-aos-delay="200">
              <div className="d-flex">
                <div className="pe-4">
                  <div className="service-btn" style={{ background: 'linear-gradient(135deg, #ffe600, rgb(219, 88, 0))' }}>
                    <FontAwesomeIcon icon={faProjectDiagram} className="fa-2x" style={{ color: 'red' }} />
                  </div>
                </div>
                <div className="service-content">
                  <a href="#" className="h4 d-inline-block mb-3">Project Management</a>
                  <p className="mb-0">Strategic project management ensures efficient execution and timely delivery.</p>
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