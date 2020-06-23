const models = require('../models');
const passwordHash = require('password-hash');

const params = (req) => ({
  username: req.body.username,
  email: req.body.email,
  passwordHash: passwordHash.generate(req.body.password),
  role: req.body.role
});

module.exports.index = async req => {
  const users = await models.User.findAll({});
  return users;
};

module.exports.create = async req => {
  const user = await models.User.create(params(req));
  return {
    description: 'User was created',
    user
  };
};

module.exports.show = async req => {
  const user = await models.User.findByPk(req.params.id);
  if (!user) {
    return {
      status: 404,
      description: 'User not found'
    };
  } else {
    return user;
  }
};

module.exports.update = async req => {
  await models.User.update(params(req), { where: { id: req.params.id } });
  return { description: 'User updated' };
};

module.exports.destroy = async req => {
  const user = await models.User.findByPk(req.params.id);
  const deletedUser = await user.destroy();
  return {
    description: 'User deleted',
    deletedUser
  };
};
