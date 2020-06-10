"use strict";

const Countries = require("../models/Countries");

async function addCountry(request, h) {
  try {
    // Obtener el objeto enviado
    const countries = new Countries(request.payload);
    // guardar ese objeto
    const countriesSave = await countries.save();
    return h.response(countriesSave).code(201);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function getCountries(request, h) {
  try {
    const page = parseInt(request.query.page || 1);
    const limit = parseInt(request.query.limit || 10);

    const count = await Countries.countDocuments();
    
    const skip = page > 1 ? page * limit : 0;
    const lastPage = Math.abs(count / limit).toFixed(0);

    const items = await Countries.find().skip(skip).limit(limit).exec();
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

async function getCountry(request, h) {
  try {
    // Buscar por id
    const country = await Countries.findById(request.params.id);
    return h.response(country).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function editCountry(request, h) {
  try {
    // Actualizar enviando primero el id, después el contenido y al final mostrar el objeto actualizado
    const updateCountry = await Countries.findByIdAndUpdate(
      request.params.id,
      request.payload,
      { new: true }
    );
    return h.response(updateCountry).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function deleteCountry(request, h) {
  try {
    // Eliminar enviando primero el id
    const deleteCountry = await Countries.findByIdAndDelete(request.params.id);
    return h.response(deleteCountry).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

module.exports = {
  addCountry: addCountry,
  getCountries: getCountries,
  getCountry: getCountry,
  editCountry: editCountry,
  deleteCountry: deleteCountry,
};
