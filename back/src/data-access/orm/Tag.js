module.exports = ({ sequelize, DataTypes }) =>
  sequelize.define("Tag", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
