import React from 'react';

const TopCountriesFlag = ({ data }) => {
  return (
    <>
      <div className='top__countries'>
        <h1>TOP 10 LARGEST COUNTRIES BY POPULATION</h1>
        {/* {countries.map((ctry) => (
          <div className='country__container' key={ctry.id}>
            <strong>{ctry.id}</strong>
            <img src={ctry.flag} alt={ctry.name} />
            <strong>{ctry.country}</strong>
            <strong>{ctry.population}</strong>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default TopCountriesFlag;
