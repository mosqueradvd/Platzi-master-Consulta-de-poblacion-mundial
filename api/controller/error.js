"use strict";

function notFound(req, h) {
  return h
    .response({
      status: 404,
      message: `Route not found ${req.path}`,
    })
    .code(404);
}

module.exports = {
  notFound: notFound,
};
