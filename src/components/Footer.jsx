import React from 'react';
import '../assets/styles/components/Footer.scss';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <p className="footer__text">© 2020 POPULAPP</p>
    <p>
      <a href="https://github.com/mosqueradvd/Platzi-master-Consulta-de-poblacion-mundial" target='_blank'>
        <FaGithub />
      </a>
    </p>
  </footer>
);

export default Footer;
