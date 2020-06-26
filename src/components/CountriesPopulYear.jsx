import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/CountriesPopulYear.scss';

const CountriesPopulYear = ({ data }) => {
  return data.length === 0 ? <h1>cargando</h1> : (
    <>
      <strong>Country</strong>
      <strong>Population</strong>
      <strong>Yearly Change</strong>
      {data.items.map((ctry) => (
        <div className='country_info'>
          <Link to={`countries/${ctry._id}`} key={ctry._id}>
            <p>{ctry.country}</p>
            <p>{ctry.years[0].country}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CountriesPopulYear;
