import React from 'react';
import TopTenCountriesChart from '../components/TopTenCountriesChart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopCountriesFlag from '../components/TopCountriesFlag';
import TopTenBoard from '../components/TopTenBoard';

import '../assets/styles/App.scss';
// import PopulByRegion from '../components/PopulByRegion';
import useInitialState from '../hooks/useInitialState';

const API = 'https://populations.hectormartinezresendiz.now.sh/v1/topcountries';

const App = () => {
  const initialState = useInitialState(API);
  // console.log(useInitialState(API));
  return (
    <div>
      <div className='container'>
        <Header />
        <TopTenBoard>
          <TopCountriesFlag data={initialState} />
          <TopTenCountriesChart data={initialState} />
          {/* <PopulByRegion /> */}
          {/* <TopCountriesFlag data={initialState} />
          <TopCountriesFlag data={initialState} />
          <TopCountriesFlag data={initialState} />
          <TopCountriesFlag data={initialState} /> */}
          {/* // TopCountriesFlag repetidos para construir la grilla */}
        </TopTenBoard>
        <Footer />
      </div>
    </div>
  );
};

export default App;
