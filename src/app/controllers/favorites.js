const models = require('../models');

const params = (req) => ({
  locationId: req.body.locationId,
  userId: req.body.userId
});

module.exports.index = async req => {
  const favorites = await models.Favorite.findAll({ where: { userId: req.params.userId } });
  return favorites;
};

module.exports.create = async req => {
  const favorite = await models.Favorite.create(params(req));
  return {
    description: 'Favorite was created',
    favorite
  };
};

module.exports.show = async req => {
  const favorite = await models.Favorite.findOne({ where: { id: req.params.id, userId: req.params.userId } });
  if (!favorite) {
    return {
      status: 404,
      description: 'Favorite not found'
    };
  } else {
    return favorite;
  }
};

module.exports.update = async req => {
  await models.Favorite.update(params(req), { where: { id: req.params.id, userId: req.params.userId } });
  return { description: 'Favorite updated' };
};

module.exports.destroy = async req => {
  const favorite = await models.Favorite.findOne({ where: { id: req.params.id, userId: req.params.userId } });
  const deletedFavorite = await favorite.destroy();
  return {
    description: 'Favorite deleted',
    deletedFavorite
  };
};
