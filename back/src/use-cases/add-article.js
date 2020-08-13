module.exports = (articleDb) =>
  function addArticle(userId, articleInfos) {
    return articleDb.insert(userId, articleInfos);
  };
