const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const api = require("./routes");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", api);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

module.exports = app;
