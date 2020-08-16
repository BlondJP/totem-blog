module.exports = (jwt, publicKey) =>
  function checkJwt(req, res, next) {
    if (!req.headers.authorization) {
      res.status(401).send("Your must provide a token 'Bearer ****'");
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    if (typeof token !== "string") {
      res.status(401).send("Your must provide a token 'Bearer ****'");
    }

    const { id, role } = jwt.verify(token, publicKey);

    if (!id || !role) {
      res.status(401).send("Your are not authorized to access");
    }

    req.headers["xxx-user-id"] = id;
    req.headers["xxx-user-role"] = role;

    next();
  };
