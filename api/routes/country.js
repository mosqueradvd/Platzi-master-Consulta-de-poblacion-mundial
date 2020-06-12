'use strict';

const country = require('../controller/country');

module.exports = [
  // Agregar los países
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'POST',
    path: '/countries',
    handler: country.addCountry,
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
    path: '/countries',
    handler: country.getCountries,
  },
  // Buscar un país por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/countries/{id}',
    handler: country.getCountry,
  },
  // Editar un país por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'PUT',
    path: '/countries/{id}',
    handler: country.editCountry,
  },
  // Eliminar un país por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'DELETE',
    path: '/countries/{id}',
    handler: country.deleteCountry,
  },
];
