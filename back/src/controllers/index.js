// dependencies
const { addArticle, findAllArticles } = require("../use-cases");

// factories
const makeCreateArticle = require("./create-article");
const makeGetAllArticles = require("./get-all-articles");

// injections
const createArticle = makeCreateArticle({ addArticle });
const getAllArticles = makeGetAllArticles({ findAllArticles });

module.exports = Object.freeze({ createArticle, getAllArticles });
