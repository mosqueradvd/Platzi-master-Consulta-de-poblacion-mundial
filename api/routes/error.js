"use strict";

const error = require("../controller/error");

module.exports = [
  {
    method: "*",
    path: "/{any*}",
    handler: error.notFound,
  },
];
