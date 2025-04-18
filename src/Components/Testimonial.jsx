import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = () => {
  console.log('Rendering Testimonial');
  const testimonialData = [
    {
      id: 1,
      image: '/img/testimonial-1.jpg',
      name: 'Client Name',
      profession: 'Profession',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.',
    },
    {
      id: 2,
      image: '/img/testimonial-2.jpg',
      name: 'Client Name',
      profession: 'Profession',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.',
    },
    {
      id: 3,
      image: '/img/testimonial-3.jpg',
      name: 'Client Name',
      profession: 'Profession',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidente pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.',
    },
    {
      id: 4,
      image: '/img/testimonial-3.jpg',
      name: 'Client Name',
      profession: 'Profession',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidente pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.',
    },
  ];

  return (
    <div className="container-fluid testimonial py-5" style={{ border: '2px solid red', minHeight: '200px' }}>
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase text-primary">Testimonials</h4>
          <h1 className="display-3 text-capitalize mb-3">Our clients reviews.</h1>
        </div>
        <Carousel interval={3000} controls={false} indicators={true}> {/* Auto-changes every 3 seconds */}
          {testimonialData.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="testimonial-item text-center p-4">
                <p>{item.review}</p>
                <div className="d-flex justify-content-center mb-4">
                  <img src={item.image} className="img-fluid border border-4 border-primary" style={{ width: '100px', height: '100px', borderRadius: '50px' }} alt={item.name} />
                </div>
                <div className="d-block">
                  <h4 className="text-dark">{item.name}</h4>
                  <p className="m-0 pb-3">{item.profession}</p>
                  <div className="d-flex justify-content-center text-secondary">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;