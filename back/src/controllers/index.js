// dependencies
const { addArticle } = require("../use-cases");

// factories
const makeCreateArticle = require("./create-article");

// injections
const createArticle = makeCreateArticle({ addArticle });

module.exports = Object.freeze({ createArticle });
