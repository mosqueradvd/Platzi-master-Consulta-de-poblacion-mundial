'use strict';

const topCountry = require('../controller/topCountry');

module.exports = [
  // Agregar el continente
  {
    method: 'POST',
    path: '/addtopcountries',
    handler: topCountry.createTopCountries,
  },
  // Listar los países
  {
    method: 'GET',
    path: '/topcountries',
    handler: topCountry.getAllTopCountries,
  },
];
