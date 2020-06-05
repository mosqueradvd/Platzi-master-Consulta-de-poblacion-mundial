const Hapi = require('@hapi/hapi');
const { config } = require('./config/index')
const routes = require('./routes/index')
require("./lib/database");

const init = async () => {
  const server = new Hapi.server({
    port: config.port,
    host: config.host
  });
  server.route(routes)

  await server.start();
  console.log(`Servidor lanzado en: ${server.info.uri}`);
}

init();