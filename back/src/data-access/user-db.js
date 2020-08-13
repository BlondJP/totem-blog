module.exports = (User) => {
  async function findOne(userId) {
    const user = User.findByPk(userId);

    if (!user) {
      throw new Error(`user with ID ${userId} does not exist.`);
    }

    return user;
  }

  return Object.freeze({ findOne });
};
