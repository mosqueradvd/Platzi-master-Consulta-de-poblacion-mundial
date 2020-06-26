// Este componente es el que parece un Excel.
// Aqui se muestran los datos de los paises
// Como en el componente de las banderas.

import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/CountriesPopulYear.scss';

const CountriesPopulYear = ({ data }) => {
  // el data.length es para precenir que salga el error de map is not a function o similares.
  return data.length === 0 ? <h1>cargando</h1> : (
    <>
      <strong>Country</strong>
      <strong>Population</strong>
      <strong>Yearly Change</strong>
      {data.items.map((ctry) => (
        <div className='country_info'>
        {/* El link es para transportar el ID del pais por medio de props*/}
          <Link to={`countries/${ctry._id}`} key={ctry._id}>
            <p>{ctry.country}</p>
            <p>{ctry.years[0].country}</p>
            {/* Estas etiquetas <p> muestran la informacion de cada pais, pero en la tabla. */}
            {/* Y el fin de este componente es redirigir a la informacion de cada pais por separado. */}
          </Link>
        </div>
      ))}
    </>
  );
};

export default CountriesPopulYear;
