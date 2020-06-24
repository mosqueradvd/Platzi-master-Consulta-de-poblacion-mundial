"use strict";

const Map = require("../models/Map");

async function getMap(request, h) {
  try {
    const page = parseInt(request.query.page || 1);
    const limit = parseInt(request.query.limit || 10);

    const count = await Map.countDocuments();

    const skip = page > 1 ? page * limit : 0;
    const lastPage = Math.abs(count / limit).toFixed(0);

    const items = await Map.find().skip(skip).limit(limit).exec();
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

module.exports = {
  getMap: getMap,
};
