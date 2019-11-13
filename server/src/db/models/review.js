'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    userId: DataTypes.INTEGER,
    movieId:DataTypes.INTEGER,
    ranking:DataTypes.INTEGER
  }, {});
  Reviews.associate = function(models) {
    
  };
  return Reviews;
};