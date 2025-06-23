const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Modular API Docs",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: [path.resolve(__dirname, "paths/**/*.yaml")],
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
