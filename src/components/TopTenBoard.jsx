import React from 'react';

import '../assets/styles/components/TopTenBoard.scss';

const TopTenBoard = ({ data }) => {
  return (
    <>
      <div className='TopTenBoard'>
        <h1>Top Ten Board</h1>
        {data.map((ctry) => (
          <div className='country__container' key={ctry.id}>
            <strong>{ctry.id}</strong>
            <img src={ctry.flag} alt={ctry.country} />
            <strong>{ctry.country}</strong>
            <strong>{ctry.population}</strong>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopTenBoard;
