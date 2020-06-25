'use strict';

const Map = require('../models/Map');

// Listar los datos del mapa
async function getMap(request, h) {
  try {
    // Buscar todos los objetos
    const map = await Map.find();
    return h.response(map).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

module.exports = {
  getMap,
};
