const express = require('express');
const BarChartdata = express.Router();
//const { getBarChartData } = require('../controllers/BarChartController');
const {getBarChartData} =require('../Controller/BarChartController.js')
BarChartdata.get('/barchart', getBarChartData);

module.exports = BarChartdata;