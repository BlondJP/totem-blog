const express = require("express");
const server = express();
const { PORT } = process.env;

// middlewares
const bodyParser = require("body-parser");
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use(bodyParser.json());

// controllers
const { createArticle } = require("./controllers");

server.post("/users/:userId/articles", createArticle);

server.listen(PORT, () => console.log(`server is listenning on port ${PORT}`));
