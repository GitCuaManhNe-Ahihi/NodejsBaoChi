"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      this.belongsTo(models.Genres, {
        foreignKey: "genresId",
        as: "genres",
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      genresId: DataTypes.INTEGER,
      public_id: DataTypes.STRING,
      view: DataTypes.INTEGER,
      like: DataTypes.INTEGER,
      validator:DataTypes.INTEGER,
    },
    {
      sequelize,
      logging: false,
      modelName: "Post",
      timestamps:true
    }
  );
  return Post;
};
