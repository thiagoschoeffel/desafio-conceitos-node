const express = require("express");
const cors = require("cors");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories).status(200);
});

app.post("/repositories", (request, response) => {});

app.put("/repositories/:id", (request, response) => {});

app.delete("/repositories/:id", (request, response) => {});

app.post("/repositories/:id/like", (request, response) => {});

module.exports = app;
