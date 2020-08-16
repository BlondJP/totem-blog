module.exports = (Article, Comment) => {
  async function insert(articleId, commentInfos) {
    const article = await Article.findByPk(articleId);

    if (!article) {
      throw new Error("article does not exist");
    }

    const comment = await Comment.create(commentInfos);
    await article.addComment(comment);

    return comment.dataValues;
  }

  return Object.freeze({ insert });
};
