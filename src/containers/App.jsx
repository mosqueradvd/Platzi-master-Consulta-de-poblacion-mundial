import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TopTenBoard from '../components/TopTenBoard';
import TopCountriesFlag from '../components/TopCountriesFlag';
import TopTenCountriesChart from '../components/TopTenCountriesChart';
import WorldPopulationRegion from '../components/WorldPopulationRegion';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';
{/* import PopulByRegion from '../components/PopulByRegion'; */}

const API = 'https://populations.hectormartinezresendiz.now.sh/v1/topcountries';

const App = () => {
  const initialState = useInitialState(API);
  {/* console.log(useInitialState(API)); */}
  return (
      <div className='container'>
        <Header />
        <TopTenBoard>
        <TopCountriesFlag />
        <TopTenCountriesChart data={initialState} />
        <WorldPopulationRegion />
        {/* <PopulByRegion /> */}
        {/* <TopCountriesFlag data={initialState} />
        <TopCountriesFlag data={initialState} />
        <TopCountriesFlag data={initialState} />
        <TopCountriesFlag data={initialState} /> */}
        {/* // TopCountriesFlag repetidos para construir la grilla */}
        </TopTenBoard>
        <Footer />
      </div>
  );
};

export default App;
