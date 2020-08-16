module.exports = (userDb, jwt, privateKey) =>
  async function authenticateUser(userId, password) {
    const user = await userDb.findOneByIdAndPassword(userId, password);

    if (!user.id) {
      throw new Error("Invalid userId to create the token");
    }

    const token = jwt.sign({ id: user.id }, privateKey, { algorithm: "RS256" });

    return token;
  };
