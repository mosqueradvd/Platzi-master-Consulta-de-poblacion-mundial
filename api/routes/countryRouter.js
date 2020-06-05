'use strict'

const country = require('../controller/country')

module.exports = [
   // Agregar los países
  {
    method: 'POST',
    path: '/addcountry',
    handler: country.addCountry,
  },
  // Listar los países
  {
    method: 'GET',
    path: '/countries',
    handler: country.getCountries,
  },
  // Buscar un país por su id
  {
    method: 'GET',
    path: '/country/{id}',
    handler: country.getCountry,
  },

  // Editar un país por su id
  {
    method: 'PUT',
    path: '/country/{id}',
    handler: country.editCountry,
  },

  // Eliminar un país por su id
  {
    method: 'DELETE',
    path: '/country/{id}',
    handler: country.deleteCountry,
  },
  {
    method: "*",
    path: "/{any*}",
    handler: country.notFound,
  },
]