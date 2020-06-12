'use strict'

const continent = require('./continent');
const country = require('./country');
const topCountryRouter = require('./topCountryRouter');
const error = require('./error');

let routes = [...continent, ...country, ...topCountryRouter, ...error];

module.exports = routes;
