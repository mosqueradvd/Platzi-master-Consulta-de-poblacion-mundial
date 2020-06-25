import React from 'react';
import { Link } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/components/CountriesPopulYear.scss'

export const CountriesPopulYear = ({ data }) => {
  return (
    <>
      <strong>Country</strong>
      <strong>Population</strong>
      <strong>Yearly Change</strong>
      {console.log('data:', data)}
      {data.map(ctry => (
        <div className='country_info'>
          <Link to={`countries/${ctry._id}`} key={ctry._id}>
            <h3>{ctry.country}</h3>
            <p>{ctry.population}</p>
            <p>{ctry.yearlyChangePercen}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CountriesPopulYear;
