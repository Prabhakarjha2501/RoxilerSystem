const express = require('express');
const { getStatistics } = require('../Controller/StatisticsController.js');

const Staticsrouter = express.Router();

Staticsrouter.get('/statistics', getStatistics);

module.exports = Staticsrouter;