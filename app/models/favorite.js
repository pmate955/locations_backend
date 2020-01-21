'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {});
  Favorite.associate = function (models) {
    Favorite.belongsTo(models.User, { foreignKey: 'id' });
    Favorite.belongsTo(models.Location, { foreignKey: 'id' });
  };
  return Favorite;
};
