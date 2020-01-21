'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Favorite, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });
  };
  return User;
};
