module.exports = ({ authenticateUser }) =>
  async function authUser(req, res) {
    const { userId, password } = req.body;

    const token = await authenticateUser(userId, password);

    return res.send({ token });
  };
