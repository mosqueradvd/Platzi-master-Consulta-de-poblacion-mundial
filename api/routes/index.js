"use strict";

const fs = require('fs');

let routes = [];

fs.readdirSync(__dirname)
  .filter(file => file != 'index.js')
  .forEach(file => {
    routes = routes.concat(require(`./${file}`))
  });

console.log(routes)

module.exports = routes;