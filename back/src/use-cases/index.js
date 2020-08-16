// dependencies
const { articleDb } = require("../data-access");

// factories
const makeAddArticle = require("./add-article");
const makeFindAllArticles = require("./find-all-articles");

// injections
const addArticle = makeAddArticle(articleDb);
const findAllArticles = makeFindAllArticles(articleDb);

module.exports = Object.freeze({ addArticle, findAllArticles });
