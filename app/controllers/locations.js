const models = require('../models');

const params = (req) => ({
  name: req.body.name,
  position: req.body.position,
  description: req.body.description,
  townId: req.boy.townId
});

module.exports.index = async req => {
  const locations = await models.Location.findAll({});
  return locations;
};

module.exports.create = async req => {
  const location = await models.Location.create(params(req));
  return {
    description: 'Location was created',
    location
  };
};

module.exports.show = async req => {
  const location = await models.Location.findByPk(req.params.id);
  if (!location) {
    return {
      status: 404,
      description: 'Location not found'
    };
  } else {
    return location;
  }
};

module.exports.update = async req => {
  await models.Location.update(params(req), { where: { id: req.params.id } });
  return { description: 'Location updated' };
};

module.exports.destroy = async req => {
  const location = await models.Location.findByPk(req.params.id);
  const deletedLocation = await location.destroy();
  return {
    description: 'Location deleted',
    deletedLocation
  };
};
