import React from 'react';
import '../assets/Globals.scss';
import '../assets/styles/components/Header.scss';
{/* import logo from '../assets/static/react.svg'; */}

const Header = () => (
  <header className='header'>
    {/* <h1 className='header__title'>
      Menu
    </h1> */}
    {/* <h1>World Population</h1> */}
    <nav className='header__menuCSS3'>
      <ul>
        <li>
          <a href='/'>Menu</a>
          <ul>
            <li><a href='/'>Statistics</a></li>
            <li><a href='/'>Top 10</a></li>
            <li>
              <a href='/'>World Statistics</a>
            </li>
            <li><a href='/'>Map</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
