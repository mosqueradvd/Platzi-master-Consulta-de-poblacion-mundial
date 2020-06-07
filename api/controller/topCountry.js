'use strict';

const TopCountries = require('../models/TopCountries');

// Agregar el top de paises
async function createTopCountries(request, h) {
  try {
    // Obtener el objeto enviado
    const topCountries = new TopCountries(request.payload);
    // guardar ese objeto
    const topCountriesSave = await topCountries.save();
    return h.response(topCountriesSave).code(201);
  } catch (error) {
    return h.response(error).code(500);
  }
}
// Listar el top de paises
async function getAllTopCountries(request, h) {
  try {
    // Buscar todos los objetos
    const topCountries = await TopCountries.find();
    return h.response(topCountries).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}
module.exports = {
  getAllTopCountries: getAllTopCountries,
  createTopCountries: createTopCountries,
};
