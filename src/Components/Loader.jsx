import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="curtain curtain-left"></div>
      <div className="curtain curtain-right"></div>
      <div className="loader-content">
        <img
          src="img/loader.gif"
          alt="Rascal Water Animation"
          className="loader-gif"
        />
        <h1 className="welcome-text">Welcome to INSABHI</h1>
        <p className="quote-text">
          "<span className="text-red-600">INSABHI</span> welcomes you to innovative ERP and software solutions."
        </p>
      </div>
    </div>
  );
};

export default Loader;