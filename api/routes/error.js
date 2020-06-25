'use strict';

const error = require('../controller/error');

module.exports = [
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: '*',
    path: '/{any*}',
    handler: error.notFound,
  },
];
