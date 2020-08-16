module.exports = (userDb, jwt, privateKey) =>
  async function authenticateUser(email, password) {
    const user = await userDb.findOneByEmailAndPassword(email, password);

    if (!user.id || !user.role) {
      throw new Error("Invalid user to create the token");
    }

    const token = jwt.sign({ id: user.id, role: user.role }, privateKey, {
      algorithm: "RS256",
    });

    return token;
  };
