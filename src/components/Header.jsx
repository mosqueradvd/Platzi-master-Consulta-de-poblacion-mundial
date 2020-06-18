import React from 'react';
import '../assets/Globals.scss';
import '../assets/styles/components/Header.scss';
// import logo from '../assets/static/react.svg';

const Header = () => {
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>
          Menu
        </h1>
        {/* <h1>World Population</h1> */}
        <nav className='nav-links'>
          <ul>
            <li><a href='/'>Statistics</a></li>
            <li><a href='/'>Top 10</a></li>
            <li>
              <a href='/'>World Statistics</a>
            </li>
            <li><a href='/'>Map</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
