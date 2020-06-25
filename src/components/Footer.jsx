import React from 'react';
import '../assets/styles/components/Footer.scss';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className='footer'>
    <p className='footer__text'>© 2020 POPULAPP</p>
    <p>
      <FaGithub />
    </p>
  </footer>
);

export default Footer;
