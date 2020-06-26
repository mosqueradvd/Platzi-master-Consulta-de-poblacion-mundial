import React from "react";
import { Link } from "react-router-dom";
import hookInitialState from "../hooks/useInitialState";

import "../assets/styles/CountryOverview.scss";
export const CountryOverview = props => {
  const { id } = props.match.params;
  const API = `https://populations.hectormartinezresendiz.now.sh/v1/countries/${id}`;
  const api = hookInitialState(API);

  return api.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
      <>
        <header>
          <h1>Country Overview</h1>
        </header>
        <div className="info_container">
          <Link to={"/"}>
            <button type="button">Go Back</button>
          </Link>
          <h2>{api.country}</h2>
          <p>
            En el año {api.years[0].year} tiene una poblacion de{" "}
            {api.years[0].population} personas. Y una Población Urbana de{" "}
            {api.years[0].countryShare} personas
        </p>
          <p>
            También, {api.country} cuenta con una densidad del{" "}
            {api.years[0].density}% y un porcentaje de Cambio Anual del{" "}
            {api.years[0].yearlyChangePercen}. Es decir,{" "}
            {api.years[0].yearlyChange} de personas.
        </p>
          <p>Con una Migracion Neta de {api.years[0].migrantsNet}</p>
          <p>
            El total de su Población tiene una edad promedio de{" "}
            {api.years[0].medianAge}
          </p>
          <p>Y la tasa de fertilidad se sitúa en {api.years[0].fertilityRate}</p>
          <p>
            Por otro lado, el prcentaje de su Población Urbana es del{" "}
            {api.years[0].urbanPopulation}
          </p>
          <p>
            Respecto al porcentaje en comparación mundial. {api.country}{" "}
          representa el {api.years[0].worldPopulation}
          </p>
          <p>Su Ranking Global es de {api.years[0].globalRang}</p>

          <a href={api.link} target="_blank" rel="noopener noreferrer">
            Para mas información oficial, visita: {api.country}
          </a>
        </div>
      </>
    );
};

export default CountryOverview;
