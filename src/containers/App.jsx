import React from 'react';
import TopTenCountriesChart from '../components/TopTenCountriesChart';
import useInitialState from '../hooks/useInitialState';

const API = 'https://populations.hectormartinezresendiz.now.sh/v1/topcountries';

const App = () => {
  const initialState = useInitialState(API);
  console.log(useInitialState(API));
  return (
    <div>
      <div className='App'>
        <TopTenCountriesChart data={initialState} />
      </div>
    </div>
  );
};

export default App;
