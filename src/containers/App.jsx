import React from 'react';
import TopTenCountriesChart from '../components/TopTenCountriesChart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopTenBoard from '../components/TopTenBoard';

import '../assets/styles/App.scss';
// import PopulByRegion from '../components/PopulByRegion';
// import useInitialState from '../hooks/useInitialState';

// const API = 'https://populations.hectormartinezresendiz.now.sh/v1/topcountries';

const App = () => {
  const initialState = useInitialState(API);
  console.log(useInitialState(API));
  return (
    <div>
      <div className='container'>
        <Header />
        <TopTenBoard />
        {/* <TopTenCountriesChart data={initialState} /> */}
        {/* <PopulByRegion /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
