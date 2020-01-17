'use strict';
module.exports = (sequelize, DataTypes) => {
  const Town = sequelize.define('Town', {
    name: DataTypes.STRING,
    position: DataTypes.STRING
  }, {});
  Town.associate = function (models) {
    Town.hasMany(models.Location, { foreignKey: 'townId' });
  };
  return Town;
};
