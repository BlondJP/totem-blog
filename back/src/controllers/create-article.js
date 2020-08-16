module.exports = ({ addArticle }) =>
  async function createArticle(req, res) {
    const { userId } = req.params;
    const article = await addArticle(userId, { ...req.body });

    return res.send({ article });
  };
