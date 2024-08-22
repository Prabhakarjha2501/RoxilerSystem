const express = require('express');
const { listTransactions } = require('../Controller/TransactionController.js');
const TransactionRouter = express.Router();
TransactionRouter.get('/transactions', listTransactions);
module.exports=TransactionRouter;