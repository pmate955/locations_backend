const models = require('../models');

const params = (req) => ({
  name: req.body.name,
  position: req.body.position
});

module.exports.index = async req => {
  const towns = await models.Town.findAll({});
  return towns;
};

module.exports.create = async req => {
  const town = await models.Town.create(params(req));
  return {
    description: 'Town was created',
    town
  };
};

module.exports.show = async req => {
  const town = await models.Town.findByPk(req.params.id);
  if (!town) {
    return {
      status: 404,
      description: 'Town not found'
    };
  } else {
    return town;
  }
};

module.exports.update = async req => {
  await models.Town.update(params(req), { where: { id: req.params.id } });
  return { description: 'Town updated' };
};

module.exports.destroy = async req => {
  const town = await models.Town.findByPk(req.params.id);
  const deletedTown = await town.destroy();
  return {
    description: 'Town deleted',
    deletedTown
  };
};
