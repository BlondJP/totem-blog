// dependencies
const { Article, User } = require("./models");

// factories
const makeUserDb = require("./user-db");
const makeArticleDb = require("./article-db");

// injections
const userDb = makeUserDb(User, Article);
const articleDb = makeArticleDb(Article, userDb);

module.exports = Object.freeze({ articleDb, userDb });
