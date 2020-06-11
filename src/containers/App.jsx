import React, { useState, useEffect } from 'react';
import TopTenCountriesChart from '../components/TopTenCountriesChart';

{ /* LLAMADA A API PARA LAS CONSULTAS */ }
{ /* const API = 'http://localhost:3000/initalState'; */ }

const App = () => (
  <div>
    <TopTenCountriesChart />
  </div>

);

export default App;

