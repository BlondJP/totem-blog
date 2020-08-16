module.exports = (articleDb) =>
  function findAllArticles(userId) {
    return articleDb.findAll(userId);
  };
