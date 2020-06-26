import React from 'react';
import '../assets/Globals.scss';
import '../assets/styles/components/Header.scss';
import {
  AiFillSignal,
  AiFillTrophy,
  AiOutlineDotChart,
  AiFillEnvironment,
  AiFillMail,
  AiOutlineHome,
} from 'react-icons/ai';
import logo from '../assets/static/populApp.png';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__menuCSS3">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="#section-first">
              <AiOutlineHome />
              Menu
            </Link>
            <ul>
              <li>
                <Link to="#section-first">
                  <AiFillSignal /> Statistics
                </Link>
              </li>
              <li>
                <Link to="#section-first">
                  <AiFillTrophy /> Top 10
                </Link>
              </li>
              <li>
                <a href="#section-second">
                  <AiOutlineDotChart /> World Statistics
                </a>
              </li>
              <li>
                <Link to="#map">
                  <AiFillEnvironment /> Map
                </Link>
              </li>
              <li>
                <Link to="#contact">
                  <AiFillMail /> Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
