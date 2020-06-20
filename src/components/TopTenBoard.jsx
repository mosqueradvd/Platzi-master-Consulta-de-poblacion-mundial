// # Componente que aloja los componentes principales

import React from 'react';
import '../assets/styles/components/TopTenBoard.scss';

const TopTenBoard = ({ children }) => {
  return (
    <>
      <div className='topTenBoard'>
        <h1>Top Ten Board - Aquí van los modulos/ </h1>
        {/* {children} */}
      </div>
    </>
  );
};

export default TopTenBoard;
