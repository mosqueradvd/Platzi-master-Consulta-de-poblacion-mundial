import React from 'react';
import '../assets/Globals.scss';

const Header = () => {
  return (
    <>
      <header className='header'>
        <h1>World Population</h1>
        <nav className='nav-links'>
          <ul>
            <li><a href='/'>Map</a></li>
            <li><a href='/'>Top 10</a></li>
            <li><a href='/'>Statistics</a></li>
            <li><a href='/'>World Statistics</a></li>
          </ul>
        </nav>
        <a href='/' className='menu-icon'>
          <i className='fal fa-bars' />
        </a>
      </header>
    </>
  );
};

export default Header;
