import React from 'react';
import TopTenCountriesChart from '../components/TopTenCountriesChart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopTenBoard from '../components/TopTenBoard';
import PopulByRegion from '../components/PopulByRegion';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'https://populations.hectormartinezresendiz.now.sh/v1/topcountries';

const App = () => {
  const initialState = useInitialState(API);
  console.log(useInitialState(API));
  return (
    <div>
      <div className='App'>
        <Header />
        <TopTenBoard data={initialState}/>
        <TopTenCountriesChart data={initialState} />
        <PopulByRegion />
        <Footer />
      </div>
    </div>
  );
};

export default App;
