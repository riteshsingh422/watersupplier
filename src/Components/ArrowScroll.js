import React, { useEffect, useState } from 'react';
import './ArrowScroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faDatabase, faCloud, faCode, faNetworkWired, faMicrochip, faBug } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faCode} className="it-icon" />
      </div>
    )
  );
};

export default ArrowScroll;
