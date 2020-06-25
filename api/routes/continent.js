'use strict';

const continent = require('../controller/continent');

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
    path: '/continents',
    handler: continent.createContinent,
  },
  // Listar los continentes
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/continents',
    handler: continent.getAllContinents,
  },
  // Buscar un continente por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/continents/{id}',
    handler: continent.getContinent,
  },
  // Editar un continente por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'PUT',
    path: '/continents/{id}',
    handler: continent.editContinent,
  },
  // Eliminar un continente por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'DELETE',
    path: '/continents/{id}',
    handler: continent.deleteContinent,
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/continent_countries/{continent}',
    handler: continent.query,
  },
];
