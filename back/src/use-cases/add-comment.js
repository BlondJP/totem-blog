module.exports = (commentDb) =>
  function addComment(articleId, commentInfos) {
    return commentDb.insert(articleId, commentInfos);
  };
