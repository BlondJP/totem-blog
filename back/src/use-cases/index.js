// dependencies
const { articleDb } = require("../data-access");

// factories
const makeAddArticle = require("./add-article");

// injections
const addArticle = makeAddArticle(articleDb);

module.exports = Object.freeze({ addArticle });
