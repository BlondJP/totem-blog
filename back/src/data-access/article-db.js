// here Article is the Model Class, userDb is the user data-access

module.exports = (Article, Comment, userDb) => {
  async function insert(userId, articleInfos) {
    const user = await userDb.findOne(userId);
    const article = await Article.create(articleInfos);
    await user.addArticle(article);

    return article.dataValues;
  }

  async function findAll(userId) {
    // const user = await userDb.findOneWithArticles(userId);

    const articles = await Article.findAll({
      where: { userId },
      include: [Comment],
    });

    return articles;
    // return user.Articles || [];
  }

  return Object.freeze({ insert, findAll });
};
