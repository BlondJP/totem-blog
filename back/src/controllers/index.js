// dependencies
const {
  authenticateUser,
  addArticle,
  findAllArticles,
} = require("../use-cases");

// factories
const makeAuthUser = require("./auth-user");
const makeCreateArticle = require("./create-article");
const makeGetAllArticles = require("./get-all-articles");

// injections
const authUser = makeAuthUser({ authenticateUser });
const createArticle = makeCreateArticle({ addArticle });
const getAllArticles = makeGetAllArticles({ findAllArticles });

module.exports = Object.freeze({ createArticle, getAllArticles, authUser });
