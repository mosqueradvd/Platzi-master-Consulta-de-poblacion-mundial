"use strict";

const country = require("../controller/country");

module.exports = [
  // Agregar los países
  {
    method: "POST",
    path: "/countries",
    handler: country.addCountry,
  },
  // Listar los países
  {
    method: "GET",
    path: "/countries",
    handler: country.getCountries,
  },
  // Buscar un país por su id
  {
    method: "GET",
    path: "/countries/{id}",
    handler: country.getCountry,
  },
  // Editar un país por su id
  {
    method: "PUT",
    path: "/countries/{id}",
    handler: country.editCountry,
  },
  // Eliminar un país por su id
  {
    method: "DELETE",
    path: "/countries/{id}",
    handler: country.deleteCountry,
  },
];
