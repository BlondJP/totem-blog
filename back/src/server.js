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
const { authUser, createArticle, getAllArticles } = require("./controllers");

server.post("/auth", authUser);

// TODO here middleware to check token

const ARTICLES_RESOURCE = "/users/:userId/articles";
server.post(ARTICLES_RESOURCE, createArticle);
server.get(ARTICLES_RESOURCE, getAllArticles);

const COMMENTS_RESOURCE = "/users/:userId/articles/:articleId/comments";
// server.post(COMMENTS_RESOURCE, createComments);

server.listen(PORT, () => console.log(`server is listenning on port ${PORT}`));
