module.exports = ({ findAllArticles }) =>
  async function getAllArticles(req, res) {
    const { userId } = req.params;
    console.log("userId", userId);
    const articles = await findAllArticles(userId);

    return res.send({ articles });
  };
