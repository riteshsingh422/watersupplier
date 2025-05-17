import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = () => {
  console.log('Rendering Testimonial');
  const testimonialData = [
    {
      id: 1,
      image: '/img/dp.jpg',
      name: 'Santosh T',
      profession: 'Owner',
      review: 'Partnering with Sachin for 7+ years has been invaluable. He nurtured a skilled team at Insabhi through personal training. I confidently recommend their dedication',
    },
    {
      id: 2,
      image: '/img/dp.jpg',
      name: 'Gurneet Jolly',
      profession: 'Director',
      review: 'Since 2018, Insabhi work has been phenomenal providing invaluable system enhancement recommendations. Sachin talent and reliability make them highly professional and recommended.',
    },
    {
      id: 3,
      image: '/img/dp.jpg',
      name: 'Mohammed Alkhatib',
      profession: 'Owner',
      review: 'Sachin showed professionalism developing our website on timely manner, he extended his support beyond our contact and supported us even at late hours when we needed him.',
    },
    {
      id: 4,
      image: '/img/dp.jpg',
      name: 'Samir Sal',
      profession: 'Office Accountant',
      review: 'Working with Insabhi is refreshing. Their expertise and dedication are invaluable. They consistently demonstrate commitment as our reliable technology partner.',
    },
  ];

  return (
    <div className="container-fluid testimonial py-5" style={{ border: '2px solid red', minHeight: '200px' }}>
      <div className="container py-5">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
          <h4 className="text-uppercase">Testimonials</h4>
          <h1 className="display-3 text-capitalize mb-3">Our clients reviews.</h1>
        </div>
        <Carousel interval={3000} controls={false} indicators={true}>
          {testimonialData.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="testimonial-item text-center p-4">
                <div className="d-flex justify-content-center mb-4">
                  <img src={item.image} className="testimonial-dp" alt={item.name} />
                </div>
                <p>{item.review}</p>
                <div className="d-block">
                  <h4 className="text-dark">{item.name}</h4>
                  <p className="m-0 pb-3 profession">{item.profession}</p>
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