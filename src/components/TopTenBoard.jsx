// # Componente que aloja los componentes principales

import React from 'react';
import '../assets/styles/components/TopTenBoard.scss';

const TopTenBoard = ({ children }) => (
  <div className='topTenBoard'>
    { children }
  </div>
);

export default TopTenBoard;
