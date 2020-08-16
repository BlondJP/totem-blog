module.exports = () =>
  function handleUserAuthorization(req, res, next) {
    // handle case role user
    console.log("CURRENT ROLE", req.headers["xxx-user-role"]);

    if (req.headers["xxx-user-role"] !== "admin") {
      console.log("not admin");
      if (req.params.userId !== "me") {
        console.log('userId !== "me"');
        return res
          .status(403)
          .send(
            'the role "user" must use the userId : "me" to follow the jwt perimeter'
          );
      } else {
        // replacing the "me" by the real ID extracted from jwt
        const userId = req.headers["xxx-user-id"];
        req.params.userId = userId;
      }
    }

    // admin can access anything
    next();
  };
