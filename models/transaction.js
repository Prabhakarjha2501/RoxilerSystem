const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig.js');

const Transactionces=(sequelize) =>{ 
  const Transaction=sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true, // Optional field
  },
  sold: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  dateOfSale: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  timestamps: false 
});
return Transaction;
}
module.exports = Transactionces;

