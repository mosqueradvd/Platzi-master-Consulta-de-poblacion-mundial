"use strict";

const continent = require("./continent");
const country = require("./country");
const error = require("./error");
const topCountry = require("./topCountry");

let routes = [...continent, ...country, ...error, ...topCountry];

module.exports = routes;
