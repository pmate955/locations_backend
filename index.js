const appBuilder = require('./app');
const port = process.env.API_PORT || 3000;

appBuilder().then(app => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});
