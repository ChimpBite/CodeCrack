import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Chad Parker &copy;{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
