// Este componente es el que recibe el id por props
// y renderiza lo necesario por medio de ese id que llega

import React from 'react';
import hookInitialState from '../hooks/useInitialState';

// rcibe los props
export const CountryOverview = (props) => {
  // desestructura el id para que haga match con los params
  const { id } = props.match.params
  // se declara que hay una nueva api y se usa el hook para hacer el llamado...
  const API = `https://populations.hectormartinezresendiz.now.sh/v1/countries/${id}`;
  const api = hookInitialState(API)

  return api.length === 0 ? <h1>Loading...</h1> : (
    <>
      {console.log('api', api.years)}
      <header>
      {/* Esto es como una especie de header. Se puede cambiar */}
        <h1>Country Overview</h1>
      </header>
      {/* Y principalmente, todo esto es la descripción de las características del país. */}
      {/* Extrayendo lo que viene de la API */}
      {/* Te recomiendo ver el figma donde dice Country Overview como para tener la guía...*/}
      <p>
        {api.country}
      </p>
      <p>
        En el año {api.years[0].year} tiene una poblacion de {api.years[0].population} personas
      </p>
      <p>
        {api.country} tiene una Población Urbana de {api.years[0].countryShare} tiene una poblacion de {api.years[0].population} personas
      </p>
      <p>
        También, {api.country} cuenta con una densidad del {api.years[0].density}% y un porcentaje de Cambio Anual del {api.years[0].yearlyChangePercen}. Es decir, {api.years[0].yearlyChange} de personas.
      </p>
      <p>
        Con una Migracion Neta de {api.years[0].migrantsNet}
      </p>
      <p>
        El total de su Población tiene una edad promedio de {api.years[0].medianAge}
      </p>
      <p>
        Y la tasa de fertilidad se sitúa en {api.years[0].fertilityRate}
      </p>
      <p>
        Por otro lado, su Población Urbana cuenta con el {api.years[0].urbanPopulation}%
      </p>
      <p>
        Respecto al porcentaje ante el mundo. {api.country} representa el {api.years[0].worldPopulation}%
      </p>
      <p>
        {api.years[0].urbanPopulation}%
      </p>
      <p>
        Su Ranking Global es de {api.years[0].globalRang}
      </p>

      <a href={api.link} target="_blank">Para mas información oficial, visita: {api.country}</a>
    </>
  )
}

export default CountryOverview;
