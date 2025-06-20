const express = require("express");
const app = express();
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/requestLogger");

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.set("trust proxy", 1);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://returns.decotvframes.com",
      "https://returns.framemytv.com",
      "https://extensions.shopifycdn.com",
      "https://d478-110-227-203-50.ngrok-free.app",
    ],
    credentials: true, // Allow cookies and headers to be sent
    methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE"], //
  })
);
app.use(requestLogger); // ✅ morgan+winston logger
app.use("/api", routes);
app.use(errorHandler);

module.exports = app;
