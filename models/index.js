const { Sequelize } = require('sequelize');
const sequelize = require('../config/dbconfig');
const TransactionModel = require('./transaction');

const db = {
    Sequelize,
    sequelize,
    Transaction: TransactionModel(sequelize, Sequelize.DataTypes),
};

module.exports = db;

