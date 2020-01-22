const expressJwt = require('express-jwt');
const config = require('../../config/config.json');

const jwt = () => {
  const { secret, availableRoutes } = config;
  return expressJwt({ secret }).unless({
    path: availableRoutes
  });
};

module.exports = jwt;
