"use strict";

const Continents = require("../models/Continents");

// Agregar el continente
async function createContinent(request, h) {
  try {
    // Obtener el objeto enviado
    const continents = new Continents(request.payload);
    // guardar ese objeto
    const continentsSave = await continents.save();
    return h.response(continentsSave).code(201);
  } catch (error) {
    return h.response(error).code(500);
  }
}
// Listar los continentes
async function getAllContinents(request, h) {
  try {
    const page = parseInt(request.query.page || 1);
    const limit = parseInt(request.query.limit || 10);

    const count = await Continents.countDocuments();

    const skip = page > 1 ? page * limit : 0;
    const lastPage = Math.abs(count / limit).toFixed(0);

    const items = await Continents.find().skip(skip).limit(limit).exec();
    const pagination = {
      total: count,
      perPage: limit,
      page: page,
      lastPage: lastPage,
    };

    const response = {
      items: items,
      pagination: pagination,
    };
    return h.response(response).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function getContinent(request, h) {
  try {
    // Buscar por id
    const continent = await Continents.findById(request.params.id);
    return h.response(continent).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function editContinent(request, h) {
  try {
    // Actualizar enviando primero el id, después el contenido y al final mostrar el objeto actualizado
    const updateContinent = await Continents.findByIdAndUpdate(
      request.params.id,
      request.payload,
      { new: true }
    );
    return h.response(updateContinent).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function deleteContinent(request, h) {
  try {
    // Eliminar enviando primero el id
    const deleteContinent = await Continents.findByIdAndDelete(
      request.params.id
    );
    return h.response(deleteContinent).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function query(request, h) {
  try {
    // Buscar todos los objetos
    const countries = await Continents.find({
      continent: request.params.continent,
    });
    return h.response(countries).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

module.exports = {
  createContinent: createContinent,
  getAllContinents: getAllContinents,
  getContinent: getContinent,
  editContinent: editContinent,
  deleteContinent: deleteContinent,
  query: query,
};
