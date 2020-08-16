module.exports = ({ findAllArticles }) =>
  async function getAllArticles(req, res) {
    const { userId } = req.params;
    const articles = await findAllArticles(userId);

    return res.send({ articles });
  };
