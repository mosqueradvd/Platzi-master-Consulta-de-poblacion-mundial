import React from 'react';
import '../assets/styles/components/TopCountriesFlag.scss';

const TopTenBoard = ({ data }) => {

  return (
    <>
      <div className='table'>
        <table>
          <caption>TOP 10 LARGEST COUNTRIESBY POPULATION</caption>
          <thead>
            <tr>
              <th className='no'>No</th>
              <th>Flag</th>
              <th>Country</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ctry) => {
              if (ctry.rank <= 10) {
                return (
                  <tr className='country__container' key={ctry.rank}>
                    <th>{ctry.rank}</th>
                    <th>
                      <img src={ctry.flag} alt={ctry.country} />
                    </th>
                    <th>{ctry.country}</th>
                    <th>{ctry.population}</th>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TopTenBoard;
