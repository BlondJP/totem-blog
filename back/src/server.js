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
const { createArticle, getAllArticles } = require("./controllers");

const ARTICLES_RESOURCE = "/users/:userId/articles";
server.post(ARTICLES_RESOURCE, createArticle);
server.get(ARTICLES_RESOURCE, getAllArticles);

server.listen(PORT, () => console.log(`server is listenning on port ${PORT}`));
