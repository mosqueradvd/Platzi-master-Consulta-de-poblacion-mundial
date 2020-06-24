import React from 'react';
import { useParams } from 'react-router';
import hookInitialState from '../hooks/useInitialState';

// const Child = () => {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

const API = `https://populations.hectormartinezresendiz.now.sh/v1/countries`;

const CountryOverview = () => {
  const api = hookInitialState(API)
  return (
    <>
      <header>
        <h1>CountryOverview</h1>
        <p>{api._id}</p>
      </header>
      <figure>
        <img src={api.country} alt="country image" />
      </figure>
    </>
  )
}

export default CountryOverview;
