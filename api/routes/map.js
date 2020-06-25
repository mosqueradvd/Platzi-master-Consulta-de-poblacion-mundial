'use strict';

const map = require('../controller/map');

module.exports = [
  // Agregar los datos del mapa
  {
    method: 'POST',
    path: '/addmap',
    handler: map.createMap,
  },
  // Listar los datos del mapa
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/map',
    handler: map.getAllMap,
  },
];
