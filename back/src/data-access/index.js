// dependencies
const { Article, User, Comment } = require("./models");

// factories
const makeUserDb = require("./user-db");
const makeArticleDb = require("./article-db");
const makeCommentDb = require("./comment-db");

// injections
const userDb = makeUserDb(User, Article);
const articleDb = makeArticleDb(Article, Comment, userDb);
const commentDb = makeCommentDb(Article, Comment);

module.exports = Object.freeze({ articleDb, userDb, commentDb });
