"use strict";

const continent = require("../controller/continent");

module.exports = [
  // Agregar el continente
  {
    method: "POST",
    path: "/continents",
    handler: continent.createContinent,
  },
  // Listar los continentes
  {
    method: "GET",
    path: "/continents",
    handler: continent.getAllContinents,
  },
  // Buscar un continente por su id
  {
    method: "GET",
    path: "/continents/{id}",
    handler: continent.getContinent,
  },
  // Editar un continente por su id
  {
    method: "PUT",
    path: "/continents/{id}",
    handler: continent.editContinent,
  },
  // Eliminar un continente por su id
  {
    method: "DELETE",
    path: "/continents/{id}",
    handler: continent.deleteContinent,
  },
  {
    method: "GET",
    path: "/continent_countries/{continent}",
    handler: continent.query,
  },
];
