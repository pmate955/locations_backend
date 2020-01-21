'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    position: DataTypes.STRING,
    townId: DataTypes.INTEGER
  }, {});
  Location.associate = function (models) {
    Location.belongsTo(models.Town, { foreignKey: 'townId' });
    Location.hasMany(models.Comment, { foreignKey: 'locationId' });
    Location.hasMany(models.Favorite, { foreignKey: 'locationId' });
  };
  return Location;
};
