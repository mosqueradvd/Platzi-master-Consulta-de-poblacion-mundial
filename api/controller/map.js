"use strict";

const Map = require("../models/Map");

async function getMap(request, h) {
  try {
    const response = await Map.find();
    return h.response(response).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

module.exports = {
  getMap: getMap,
};
