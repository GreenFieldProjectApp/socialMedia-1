const { Sequelize, DataTypes } = require("sequelize");
// const config = require("../config");

//Create a Sequelize instance and pass the appropriate parameters separately
//You should modify 'database', 'username' and 'password' to fit your own credentials.

<<<<<<< HEAD
const sequelize = new Sequelize("blogs","root","alaa25062001",
=======

const sequelize = new Sequelize("blogs","root","Mahdi123321",

>>>>>>> 11b2457c994fb9724a3ca588f03381e991e2295f
  {
    HOST: "localhost",
    dialect: "mysql",
  }
);

//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user.model")(sequelize, DataTypes);
db.Post = require("./post.model")(sequelize, DataTypes);
db.Comment = require("./comment.model")(sequelize, DataTypes);
//db.CommentReply= require("./CommentReply.model")(sequelize, DataTypes);

db.User.hasMany(db.Post, {
  foreignKey: "userId",
});
db.User.hasMany(db.Comment, {
  foreignKey: "userId",
});
// db.User.hasMany(db.CommentReply,{
//   foreignKey: "userId",
// })

db.Post.belongsTo(db.User, {
  as: "user",
  foreignKey: "userId",
  onDelete: "CASCADE",
});
db.Post.hasMany(db.Comment, {
  foreignKey: "postId",
});

db.Comment.belongsTo(db.User, {
  as: "user",
  foreignKey: "userId",
  onDelete: "CASCADE",
});
db.Comment.belongsTo(db.Post, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});
// db.Comment.hasMany(db.CommentReply, {
//   foreignKey: "commentID",
// });
// db.CommentReply.belongsTo(db.User, {
//   as: "user",
//   foreignKey: "userId",
//   onDelete: "CASCADE",
// });
// db.CommentReply.belongsTo(db.Comment, {
//   foreignKey: "commentId",
//   onDelete: "CASCADE",
// });
db.sequelize.sync()
db.User.sync()
console.log("The table for the Users model was just (re)created!")
db.Post.sync()
console.log("The table for the Posts model was just (re)created!")
db.Comment.sync()
console.log("The table for the Comments model was just (re)created!")

db.sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.error("connection lost", err));

module.exports = db;
