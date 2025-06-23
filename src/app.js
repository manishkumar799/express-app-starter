const express = require("express");
const app = express();
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/requestLogger");
const { swaggerUi, specs } = require("./docs/swagger");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.set("trust proxy", 1);

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true, // Allow cookies and headers to be sent
    methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE"], //
  })
);
app.use(requestLogger); // ✅ morgan+winston logger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api", routes);
app.use(errorHandler);

module.exports = app;
