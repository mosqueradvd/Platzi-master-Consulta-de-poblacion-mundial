'use strict';

const topCountry = require('../controller/topCountry');

module.exports = [
  // Agregar el continente
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'POST',
    path: '/addtopcountries',
    handler: topCountry.createTopCountries,
  },
  // Listar los países
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/topcountries',
    handler: topCountry.getAllTopCountries,
  },
];
