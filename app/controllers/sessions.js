const config = require('../../config/config.json');
const jwt = require('jsonwebtoken');
const models = require('../models');
const passwordHashNpm = require('password-hash');

module.exports.new = async ({ username, password }) => {
  const user = models.User.findOne({
    where: {
      username: username,
      passwordHash: passwordHashNpm.verify(password)
    }
  });
  if (user) {
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: `${config.expirationTime}${config.exporationUnit}` });
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token
    };
  }
};

module.exports.destroy = async (req) => {
  await models.TokenBlacklist.create({ token: req.headers.authorization });
};
