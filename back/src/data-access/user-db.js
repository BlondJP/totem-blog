module.exports = (User, Article) => {
  async function findOne(userId) {
    const user = User.findByPk(userId);

    if (!user) {
      throw new Error(`user with ID ${userId} does not exist.`);
    }

    return user;
  }

  async function findOneWithArticles(userId) {
    const user = User.findOne({
      where: { id: userId },
      include: [Article],
    });

    if (!user) {
      throw new Error(`user with ID ${userId} does not exist.`);
    }

    return user;
  }

  async function findOneByIdAndPassword(id, password) {
    const user = User.findOne({
      where: { id, password },
      include: [Article],
    });

    if (!user) {
      throw new Error(
        `user with ID ${id} and the provided password does not exist.`
      );
    }

    return user;
  }

  return Object.freeze({
    findOne,
    findOneWithArticles,
    findOneByIdAndPassword,
  });
};
