import React from 'react';
import './Gallery.css';

const images = [
  '/img/img1.jpeg',
  '/img/img2.jpeg',
  '/img/img3.jpeg',
  '/img/img4.jpeg',
  '/img/img5.jpeg',
  '/img/img6.jpg',
  '/img/img7.jpg',
  '/img/img4.jpeg',
  '/img/img2.jpeg'
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="text-center">Our Gallery</h1>
        <p className="text-center">
          Explore moments captured at <span style={{ color: 'red' }}>INSABHI</span> PVT LTD
        </p>
      </div>
      <div className="scope">
        {images.map((src, index) => (
          <span key={index} style={{ '--i': index + 1 }}>
            <img src={src} alt={`Gallery image ${index + 1}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Gallery;