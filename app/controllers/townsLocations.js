const models = require('../models');

const params = (req) => ({
  name: req.body.name,
  position: req.body.position,
  description: req.body.description,
  townId: req.params.townId
});

module.exports.index = async req => {
  const towns = await models.Location.findAll({ where: { townId: req.params.townId } });
  return towns;
};

module.exports.create = async req => {
  const town = await models.Location.create(params(req));
  return {
    description: 'Location was created',
    town
  };
};

module.exports.show = async req => {
  const town = await models.Location.findOne({ where: { townId: req.params.townId, id: req.params.id } });
  if (!town) {
    return {
      status: 404,
      description: 'Location not found'
    };
  } else {
    return town;
  }
};

module.exports.update = async req => {
  await models.Location.update(params(req), { where: { townId: req.params.townId, id: req.params.id } });
  return { description: 'Location updated' };
};

module.exports.destroy = async req => {
  const town = await models.Location.findOne({ where: { id: req.params.id } });
  const deletedLocation = await town.destroy();
  return {
    description: 'Location deleted',
    deletedLocation
  };
};
