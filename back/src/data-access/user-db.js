module.exports = (User, Article) => {
  async function findOne(userId) {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error(`user with ID ${userId} does not exist.`);
    }

    return user;
  }

  async function findOneWithArticles(userId) {
    const user = await User.findOne({
      where: { id: userId },
      include: [Article],
    });

    if (!user) {
      throw new Error(`user with ID ${userId} does not exist.`);
    }

    return user;
  }

  async function findOneByEmailAndPassword(email, password) {
    const user = await User.findOne({
      where: { email, password },
    });

    if (!user) {
      throw new Error(
        `user with email ${email} and the provided password does not exist.`
      );
    }

    return user;
  }

  return Object.freeze({
    findOne,
    findOneWithArticles,
    findOneByEmailAndPassword,
  });
};
