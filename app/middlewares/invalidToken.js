const models = require('../models');
const moment = require('moment');
const config = require('../../config/config.json');
const Op = require('sequelize').Op;

const hasToCheck = (url) => {
  for (const path of config.availableRoutes) {
    if (url.startsWith(path)) {
      return false;
    }
  }
  return true;
};

module.exports = async (req, res, next) => {
  if (hasToCheck(req.url)) {
    const invalidTokens = await models.TokenBlacklist.findAll({
      where: {
        token: req.headers.authorization,
        createdAt: {
          [Op.gt]: moment().subtract(config.expirationTime, 'day').format()
        }
      }
    });
    if (invalidTokens.length > 0) {
      res.sendStatus(401);
      return;
    }
  }
  next();
}
;
