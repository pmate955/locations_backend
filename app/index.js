const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const appBuilder = () =>
  new Promise((resolve, reject) => {
    app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false })
    );
    app.use('/towns', require('./routers/towns'));
    resolve(app);
  });

module.exports = appBuilder;
