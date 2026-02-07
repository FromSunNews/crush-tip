const app = require('../apps/be/dist/src/serverless');
module.exports = app.default || app;
