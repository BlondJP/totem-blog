// dependencies
const {
  authenticateUser,
  addArticle,
  findAllArticles,
  addComment,
} = require("../use-cases");

// factories
const makeAuthUser = require("./auth-user");
const makeCreateArticle = require("./create-article");
const makeGetAllArticles = require("./get-all-articles");
const makeCreateComment = require("./create-comment");

// injections
const authUser = makeAuthUser({ authenticateUser });
const createArticle = makeCreateArticle({ addArticle });
const getAllArticles = makeGetAllArticles({ findAllArticles });
const createComment = makeCreateComment({ addComment });

module.exports = Object.freeze({
  createArticle,
  getAllArticles,
  authUser,
  createComment,
});
