const express = require('express');
const PieChartrouter = express.Router();
const PieChartController=require('../Controller/PieChartController.js');
PieChartrouter.get('/piechart', PieChartController.getPieChartData);

module.exports = PieChartrouter;