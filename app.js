const express = require('express');
const db = require('./models');
const moment = require('moment');
const TransactionRouter = require('./route/TransactionRoute.js');
const Staticsrouter = require('./route/StatisticsRoute.js');
const BarChartdata = require('./route/BarChartRoute.js');
const PieChartrouter = require('./route/PieChartRoute.js');
const Combinerouter = require('./route/CombineRoute.js');

const app = express();
app.use(express.json());

// API routes here
app.use('/api',TransactionRouter);
app.use('/api',Staticsrouter);
app.use('/api',BarChartdata);
app.use('/api',PieChartrouter);
app.use('/api',Combinerouter);

module.exports = app;