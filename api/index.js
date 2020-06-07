const Hapi = require("@hapi/hapi");
const { config } = require("./config/index");
const routes = require("./routes/index");
require("./lib/database");

const init = async () => {
  const server = new Hapi.server({
    port: config.port || 3000,
    host: config.host || "localhost",
  });

  try {
    server.route(routes);
    await server.start();
  } catch (error) {
    console.error(error);
  }
  console.log(`Servidor lanzado en: ${server.info.uri}`);
};

// lo mando cuando una promesa causa error
process.on("unhandledRejection", (error) => {
  console.error("unhandleRejection", error.message, error);
});

process.on("uncaughtException", (error) => {
  console.error("uncaughtException", error.message, error);
});

init();
