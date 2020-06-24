import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

import '../assets/styles/components/CountriesPopulYear.scss'

export const CountriesPopulYear = ({ data }) => {
  return (
    <>
      <strong>Country</strong>
      <strong>Population</strong>
      <strong>Yearly Change</strong>
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