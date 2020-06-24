import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryOverview from '../containers/CountryOverview';
import App from '../containers/App';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/countries/:id' component={CountryOverview} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
