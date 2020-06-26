import React from 'react';
import '../assets/styles/components/Footer.scss';
import { FaGithub, FaChevronUp } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => (
  <footer className="footer">
    <div className="footer__bootomUp">
      <Link to="#section-first">
        <FaChevronUp />
      </Link>
    </div>
    <div className="footer__text">
      <p>© 2020 POPULAPP</p>
      <p>
        <a
          href="https://github.com/mosqueradvd/Platzi-master-Consulta-de-poblacion-mundial"
          target="_blank"
        >
          <FaGithub />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
