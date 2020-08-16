module.exports = ({ addComment }) =>
  async function createComment(req, res) {
    const { articleId } = req.params;

    const comment = await addComment(articleId, { ...req.body });

    return res.send({ comment });
  };
