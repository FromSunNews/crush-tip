const app = require('../apps/be/dist/serverless');
module.exports = app.default || app;
