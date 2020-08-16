module.exports = () =>
  function handleUserAuthorization(req, res, next) {
    if (req.headers["xxx-user-role"] !== "admin") {
      if (req.params.userId && req.params.userId !== "me") {
        return res
          .status(403)
          .send(
            'the role "user" must use the userId : "me" to respect the jwt scope'
          );
      } else {
        // replacing the "me" by the authenticated ID extracted from jwt
        const userId = req.headers["xxx-user-id"];
        req.params.userId = userId;
      }
    }

    next();
  };
