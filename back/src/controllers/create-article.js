module.exports = ({ addArticle }) =>
  async function createArticle(req, res) {
    const { userId } = req.params;
    console.log("userId", userId);
    const article = await addArticle(userId, { ...req.body });

    return res.send({ article });
  };
