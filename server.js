// server.js
require("dotenv").config();
const app = require("./src/app");
const logger = require("./src/config/logger");
const { sequelize } = require("./src/models");

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    logger.info("DB connected.");
    return sequelize.sync(); // use { force: true } in dev if needed { alter: true }
  })
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => logger.error("DB connection error:", err));
