const models = require('../models');

const params = (req) => ({
  locationId: req.body.locationId,
  locationId: req.body.locationId,
  commentMessage: req.body.commentMessage,
  rating: req.body.rating
});

module.exports.index = async req => {
  const comments = await models.Comment.findAll({ where: { locationId: req.params.locationId } });
  return comments;
};

module.exports.create = async req => {
  const comment = await models.Comment.create(params(req));
  return {
    description: 'Comment was created',
    comment
  };
};

module.exports.show = async req => {
  const comment = await models.Comment.findOne({ where: { id: req.params.id, locationId: req.params.locationId } });
  if (!comment) {
    return {
      status: 404,
      description: 'Comment not found'
    };
  } else {
    return comment;
  }
};

module.exports.update = async req => {
  await models.Comment.update(params(req), { where: { id: req.params.id, locationId: req.params.locationId } });
  return { description: 'Comment updated' };
};

module.exports.destroy = async req => {
  const comment = await models.Comment.findOne({ where: { id: req.params.id, locationId: req.params.locationId } });
  const deletedComment = await comment.destroy();
  return {
    description: 'Comment deleted',
    deletedComment
  };
};
