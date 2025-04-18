import React from 'react';
import './Loader.css'; // Custom CSS for loader

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <img
          src="https://media.tenor.com/4rGualbshuIAAAAm/rascal-water.webp"
          alt="Rascal Water Animation"
          className="loader-gif"
        />
        <h1 className="welcome-text">Welcome to AquaNest</h1>
        <p className="quote-text">"Providing the best water solutions for a healthier life"</p>
      </div>
    </div>
  );
};

export default Loader;
