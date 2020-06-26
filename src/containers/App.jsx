import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Header from '../components/Header';
import TopTenBoard from '../components/TopTenBoard';
import TopCountriesFlag from '../components/TopCountriesFlag';
import TopTenCountriesChart from '../components/TopTenCountriesChart';
import WorldPopulationRegion from '../components/WorldPopulationRegion';
import CountriesPopulYear from '../components/CountriesPopulYear';
import Form from '../components/Form';
import WorldPopulationDensity from '../components/WorldPopulationDensity';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'https://populations.hectormartinezresendiz.now.sh/v1/topcountries';
const apiCountries =
  'https://populations.hectormartinezresendiz.now.sh/v1/countries';

const apiContinents = 'https://populations.hectormartinezresendiz.now.sh/v1/continents';


const App = () => {
  const initialState = useInitialState(API);
  const initialStateCountries = useInitialState(apiCountries);
  const initialStateApiContinents = useInitialState(apiContinents);
  const [content, setContent] = useState('');

  return (
    <>
      <div className='container'>
        <Header />
        <TopTenBoard>
          <TopTenCountriesChart data={initialState} />
          <WorldPopulationRegion data={initialStateApiContinents} />
          <CountriesPopulYear data={initialStateCountries} />
          <div>
            <WorldPopulationDensity setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </div>

          <Form />
        </TopTenBoard>
        <Footer />
      </div>
    </>
  );
};

export default App;
