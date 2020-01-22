const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('./middlewares/jwt');
const app = express();

const appBuilder = () =>
  new Promise((resolve, reject) => {
    app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
      jwt()
    );
    app.use('/towns', require('./routes/towns'));
    app.use('/users', require('./routes/users'));
    app.use('/locations', require('./routes/locations'));
    app.use('/users/:userId/favorites', require('./routes/favorites'));
    app.use('/locations/:locationId/comments', require('./routes/comments'));
    app.use('/sessions/new', require('./routes/sessions'));
    resolve(app);
  });

module.exports = appBuilder;
