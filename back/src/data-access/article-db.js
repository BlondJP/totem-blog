// here Article is the Model Class, userDb is the user data-access

module.exports = (Article, userDb) => {
  async function insert(userId, articleInfos) {
    const user = await userDb.findOne(userId);
    const article = await Article.create(articleInfos);
    await user.addArticle(article);

    return article.dataValues;
  }

  return Object.freeze({ insert });
};
