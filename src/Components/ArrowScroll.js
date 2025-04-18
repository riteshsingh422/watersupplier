import React, { useEffect, useState } from 'react';
import { FaBottleWater } from 'react-icons/fa6';
import './ArrowScroll.css';

const ArrowScroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    visible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaBottleWater className="bottle-icon" />
      </div>
    )
  );
};

export default ArrowScroll;
