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
  };
  return Location;
};
