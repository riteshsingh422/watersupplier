import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Feature from './Components/Feature';
import About from './Components/About';
import Service from './Components/Service';
import Product from './Components/Product';
import Testimonial from './Components/Testimonial';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import Loader from './Components/Loader';
import 'animate.css';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar
            handleShow={handleShow}
            scrollToAbout={() => scrollToSection(aboutRef)}
            scrollToService={() => scrollToSection(serviceRef)}
            scrollToContact={() => scrollToSection(contactRef)}
          />
          <Carousel handleShow={handleShow} />
          <Feature />
          <div ref={aboutRef} id="about">
            <About />
          </div>
          <div ref={serviceRef} id="service">
            <Service />
          </div>
          <Product />
          <Testimonial />
          <div id="gallery">
            <Gallery />
          </div>
          <div ref={contactRef} id="contact">
            <ContactUs />
          </div>
          <Footer />
          {/* <OrderModal show={showModal} handleClose={handleClose} /> */}
          {/* <ArrowScroll /> */}
        </>
      )}
    </div>
  );
};

export default Home;