const axios = require('axios');
const {Transaction}=require('../models/transaction.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
      const transactions = response.data;

      const formattedTransactions = transactions.map(transaction => ({
        id: transaction.id,
        title: transaction.title,
        price: transaction.price,
        description: transaction.description,
        category: transaction.category,
        image: transaction.image,
        sold: transaction.sold,
        dateOfSale: new Date(transaction.dateOfSale), 
        createdAt: new Date(), 
        updatedAt: new Date(),
      }));
      await queryInterface.bulkInsert('Transactions', formattedTransactions, {});
    } catch (error) {
      console.error('Error seeding transactions:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};


