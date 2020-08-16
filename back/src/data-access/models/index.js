// dependencies
const { Sequelize, DataTypes } = require("sequelize");
const DATABASE_CONFIG = "sqlite::memory:";
const sequelize = new Sequelize(DATABASE_CONFIG);

// factories
const makeTag = require("./Tag");
const makeArticle = require("./Article");
const makeComment = require("./Comment");
const makeUser = require("./User");

// creating models
const Tag = makeTag({ sequelize, DataTypes });
const Article = makeArticle({ sequelize, DataTypes });
const Comment = makeComment({ sequelize, DataTypes });
const User = makeUser({ sequelize, DataTypes });

// Associations
Article.belongsToMany(Tag, { through: "Article_Tags" });
Tag.belongsToMany(Article, { through: "Article_Tags" });

User.hasMany(Article);
Article.belongsTo(User);

Article.hasMany(Comment);
Comment.belongsTo(Article);

sequelize.sync({ force: true }).then(async () => {
  console.log("synchronizing models ...");

  const users = require("../../data/users.json");

  console.log("start injecting users");
  users.forEach((userInfos) => {
    User.create(userInfos).then((u) =>
      console.log(`${u.nickName} has been created with values: `, u.dataValues)
    );
  });
});

module.exports = Object.freeze({ Article, User, Comment });
