const express = require("express");
const server = express();
const { PORT } = process.env;
// const userScopeRouter = require("./user-scope-router");

// shared middlewares
const bodyParser = require("body-parser");
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use(bodyParser.json());

// public endpoint
const { authUser } = require("./controllers");
server.post("/auth", authUser);

// check jwt & authorization
const { checkJwt, handleUserAuthorization } = require("./middlewares");
server.use(checkJwt);
server.param("userId", handleUserAuthorization);

// server.use("/users/:userId", userScopeRouter);

const {
  createArticle,
  getAllArticles,
  createComment,
} = require("./controllers");

const ARTICLES_RESOURCE = "/users/:userId/articles";
server.post(ARTICLES_RESOURCE, createArticle);
server.get(ARTICLES_RESOURCE, getAllArticles);

const COMMENTS_RESOURCE = "/users/:userId/articles/:articleId/comments";
server.post(COMMENTS_RESOURCE, createComment);
server.listen(PORT, () => console.log(`server is listenning on port ${PORT}`));
