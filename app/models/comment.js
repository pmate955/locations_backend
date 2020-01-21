'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    commentMessage: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: 'id' });
    Comment.belongsTo(models.Location, { foreignKey: 'id' });
  };
  return Comment;
};
