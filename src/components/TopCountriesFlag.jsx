import React from 'react';

const TopCountriesFlag = ({ data }) => {

  const ponerFlag = () => {
    //rearmar el compoente  pero no lo logre 
    data.map((ctry) => {
      <tr>
        <td>{ctry.rank}</td>
      </tr>
      // <div className='country__container' key={ctry._id}>
      //   <strong>{ctry.id}</strong>
      //   <img src={ctry.flag} alt={ctry.name} />
      //   <strong>{ctry.country}</strong>
      //   <strong>{ctry.population}</strong>
      // </div>
    });
  };

  return (
    <>
      <div className='top__countries'>
        <h1>TOP 10 LARGEST COUNTRIES BY POPULATION</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Flag</th>
              <th>Country</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>{ponerFlag()}</tbody>
        </table>
      </div>
    </>
  );
};

export default TopCountriesFlag;
