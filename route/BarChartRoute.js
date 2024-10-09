const express = require('express');
const BarChartdata = express.Router();
const {getBarChartData} =require('../Controller/BarChartController.js')
BarChartdata.get('/barchart', getBarChartData);

module.exports = BarChartdata;