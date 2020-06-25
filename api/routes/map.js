'use strict';

const map = require('../controller/map');

module.exports = [
  {
    method: 'GET',
    path: '/map',
    handler: map.getMap,
  },
];
