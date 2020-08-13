// dependencies
const { Article, User } = require("./orm");

// factories
const makeUserDb = require("./user-db");
const makeArticleDb = require("./article-db");

// injections
const userDb = makeUserDb(User);
const articleDb = makeArticleDb(Article, userDb);

module.exports = Object.freeze({ articleDb, userDb });
