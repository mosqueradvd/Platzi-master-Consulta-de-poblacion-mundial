import React from 'react';
import '../assets/styles/components/TopTenBoard.scss';

import '../assets/styles/components/TopTenBoard.scss';

const TopTenBoard = ({ data }) => {
  return (
    <>
      <div className='topTenBoard'>
        <h1>Top Ten Board (-.-) Aquí van los modulos/ </h1>
        {/* {countries.map((ctry) => ( */}
        {/* <div className='country__container' key={ctry.id}> */}
        {/* <strong>{ctry.id}</strong> */}
        {/* <img src={ctry.flag} alt={ctry.name} />
          <strong>{ctry.country}</strong>
          <strong>{ctry.population}</strong>
        </div>
      ))} */}
      </div>
    </>
  );
};

export default TopTenBoard;
