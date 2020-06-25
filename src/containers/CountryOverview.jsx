import React from 'react';
import hookInitialState from '../hooks/useInitialState';

export const CountryOverview = (props) => {
  const { id } = props.match.params
  const API = `https://populations.hectormartinezresendiz.now.sh/v1/countries/${id}`;
  const api = hookInitialState(API)

  return (
    <>
      <header>
        <h1>CountryOverview</h1>
        <p>{id}</p>
      </header>
    </>
  )
}

export default CountryOverview;
