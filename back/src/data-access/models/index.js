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
      console.log(`${u.nickName} has been created with id ${u.id}.`)
    );
  });

  //   const user = await User.create({
  //     email: "jean-philippe@blond-technologies.com",
  //     nickName: "JPB",
  //     password: "lol",
  //     avatar_url: "kjljllkjlkl",
  //     role: "ADMIN",
  //   });
  //   const tag = await Tag.create({ name: "Tech" });
  //   const article = await Article.create({
  //     title: "Huawei vs USA",
  //     text: "c'est la guerre",
  //     picture_url:
  //       "https://actu.meilleurmobile.com/wp-content/uploads/2019/09/huawei-vs-usa.jpg",
  //     private: false,
  //     tag,
  //   });
  //   await user.addArticle(article);
  //   await article.addTag(tag);
  //   const result = await Article.findOne({
  //     where: { title: "Huawei vs USA" },
  //     include: [Tag, User],
  //   });
  //   console.log(result);
});

module.exports = Object.freeze({ Article, User, Comment });
