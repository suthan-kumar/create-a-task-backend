const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { PORT } = require("./constants/config");
const { initDB } = require("./util/db");
const createHttpError = require("http-errors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

const init = () => {
  app.listen(PORT, () => {
    console.log("Express running on", PORT);
  });
};

initDB(init);

const TaskRoutes = require("./routes/task");
app.use("/task", TaskRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Invalid Endpoint."));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message,
  });
});
