import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
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
import hook from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'https://populations.hectormartinezresendiz.now.sh/v1/topcountries';
const API2 = 'https://populations.hectormartinezresendiz.now.sh/v1/countries';

const App = () => {

  const initialState = useInitialState(API);
  const [content, setContent] = useState("");

  return (
    <>
      <div className='container'>
        <Header />
        <TopTenBoard>
          <TopTenCountriesChart data={initialState} />
          <WorldPopulationRegion />
          <CountriesPopulYear data={initialState} />
          <div>
            <WorldPopulationDensity setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </div>
          <TopCountriesFlag data={initialState} />
          <Form />
        </TopTenBoard>
        <Footer />
      </div>
    </>
  );
};

export default App;
