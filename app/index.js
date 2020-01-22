const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('./middlewares/jwt');
const invalidToken = require('./middlewares/invalidToken');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

const appBuilder = () =>
  new Promise((resolve, reject) => {
    app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
      jwt(),
      invalidToken
    );
    app.use('/towns', require('./routes/towns'));
    app.use('/users', require('./routes/users'));
    app.use('/locations', require('./routes/locations'));
    app.use('/users/:userId/favorites', require('./routes/favorites'));
    app.use('/locations/:locationId/comments', require('./routes/comments'));
    app.use('/sessions', require('./routes/sessions'));
    app.use(errorHandler);
    resolve(app);
  });

module.exports = appBuilder;
