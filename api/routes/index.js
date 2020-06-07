"use strict";

const continent = require("./continent");
const country = require("./country");
const error = require("./error");

let routes = [...continent, ...country, ...error];

module.exports = routes;
