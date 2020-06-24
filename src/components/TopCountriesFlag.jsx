import React from 'react';
import '../assets/styles/components/TopTenBoard.scss';

const TopTenBoard = ({ data }) => {

  return (
    <>
      <div className='TopTenBoard'>
        <h1>Top Ten Board</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Flag</th>
              <th>Country</th>
              <th>Population</th>
            </tr>
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
          </thead>
        </table>
      </div>
    </>
  );
};
export default TopTenBoard;
