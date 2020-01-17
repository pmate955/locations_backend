const models = require('../models');

const index = async req => {
  const towns = await models.Town.findAll({});
  return towns;
};

module.exports = {
  index
}
;
