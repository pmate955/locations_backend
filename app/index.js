const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const appBuilder = () =>
  new Promise((resolve, reject) => {
    app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false })
    );
    app.use('/towns', require('./routes/towns'));
    app.use('/users', require('./routes/users'));
    resolve(app);
  });

module.exports = appBuilder;
