'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    movieId:DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    
  };
  return Comment;
};