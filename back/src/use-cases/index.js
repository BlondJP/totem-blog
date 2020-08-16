// dependencies
const { articleDb, userDb } = require("../data-access");
const jwt = require("jsonwebtoken");
const { PRIVATE_KEY_FILENAME, PUBLIC_KEY_FILENAME } = process.env;
const fs = require("fs");
const appRoot = require("app-root-path");

// factories
const makeAddArticle = require("./add-article");
const makeFindAllArticles = require("./find-all-articles");
const makeAuthenticateUser = require("./authenticate-user");
const makeProvidePrivateKey = require("./provide-private-key");
const makeProvidePublicKey = require("./provide-public-key");

// injections
const addArticle = makeAddArticle(articleDb);
const findAllArticles = makeFindAllArticles(articleDb);
const providePrivateKey = makeProvidePrivateKey(
  fs,
  appRoot,
  PRIVATE_KEY_FILENAME
);
const providePublicKey = makeProvidePublicKey(fs, appRoot, PUBLIC_KEY_FILENAME);

const authenticateUser = makeAuthenticateUser(userDb, jwt, providePrivateKey());

module.exports = Object.freeze({
  addArticle,
  findAllArticles,
  authenticateUser,
  providePublicKey,
});
