const path = require('path');

module.exports = {
  'models-path': path.resolve('models'),
  'seeders-path': path.resolve('seeders'),
  'migrations-path': path.resolve('migrations'),
  'config': path.resolve('config', 'dbconfig.js') // Make sure this path is correct
};