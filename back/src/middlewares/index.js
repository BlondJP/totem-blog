const jwt = require("jsonwebtoken");
const { providePublicKey } = require("../use-cases");

// factories
const makeCheckJwt = require("./check-jwt");
const makeHandleUserAuthorization = require("./handle-user-authorization");

// injections
const checkJwt = makeCheckJwt(jwt, providePublicKey());
const handleUserAuthorization = makeHandleUserAuthorization();

module.exports = { checkJwt, handleUserAuthorization };
