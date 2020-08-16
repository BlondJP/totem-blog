module.exports = ({ sequelize, DataTypes }) =>
  sequelize.define("User", {
    // id: {
    //   allowNull: false,
    //   primaryKey: true,
    //   type: DataTypes.UUID,
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatarUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
