import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/CountriesPopulYear.scss';

const CountriesPopulYear = ({ data }) => {

  return data.length === 0 ? <h1>cargando</h1> : (
    <>
      <table className='table--big'>
        <caption>
          <strong>Country</strong>
          <strong>Population</strong>
          <strong>Yearly Change</strong>
        </caption>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
            <th>Yearly change</th>
            <th>density</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((ctry) => {
            return (
              <tr>
                <th><Link to={`countries/${ctry._id}`} key={ctry._id}>{ ctry.country }</Link></th>
                <th>{ctry.years[0].population}</th>
                <th>{ctry.years[0].yearlyChangePercen}</th>
                <th>{ctry.years[0].density}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CountriesPopulYear;
