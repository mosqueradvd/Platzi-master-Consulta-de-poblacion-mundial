'use strict';

const Map = require('../models/Map');

// Agregar los datos del map
async function createMap(request, h) {
  try {
    // Obtener el objeto enviado
    const map = new Map(request.payload);
    // guardar ese objeto
    const mapSave = await map.save();
    return h.response(mapSave).code(201);
  } catch (error) {
    return h.response(error).code(500);
  }
}
// Listar los datos del map
async function getAllMap(request, h) {
  try {
    // Buscar todos los objetos
    const map = await Map.find();
    return h.response(map).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}
module.exports = {
  getAllMap,
  createMap,
};
