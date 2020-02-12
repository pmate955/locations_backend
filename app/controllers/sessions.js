const config = require('../../config/config.json');
const jwt = require('jsonwebtoken');
const models = require('../models');
const passwordHashNpm = require('password-hash');

module.exports.new = async (req) => {
  const user = await models.User.findOne({
    where: {
      username: req.body.username,
      passwordHash: passwordHashNpm.verify(req.body.password)
    }
  });
  if (user) {
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: `${config.expirationTime}${config.expirationUnit}` });
    const { username, email, role, createdAt, id } = user;
    return {
      token,
      id,
      username,
      email,
      role,
      createdAt
    };
  }
};

module.exports.destroy = async (req) => {
  await models.TokenBlacklist.create({ token: req.headers.authorization });
};
