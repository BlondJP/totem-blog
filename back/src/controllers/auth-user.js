module.exports = ({ authenticateUser }) =>
  async function authUser(req, res) {
    const { email, password } = req.body;

    const token = await authenticateUser(email, password);

    return res.send({ token });
  };
