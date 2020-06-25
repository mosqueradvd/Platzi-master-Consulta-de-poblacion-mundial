'use strict';

const continent = require('./continent');
const country = require('./country');
const topCountryRouter = require('./topCountryRouter');
const error = require('./error');
const map = require('./map');

const routes = [
  ...continent,
  ...country,
  ...topCountryRouter,
  ...error,
  ...map,
];

module.exports = routes;
