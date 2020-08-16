module.exports = ({ sequelize, DataTypes }) =>
  sequelize.define("Comment", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
