const axios = require('axios');
 // Adjust the path if necessary
//const {Transaction} =require('../models')
const {Transaction}=require('../models/transaction.js')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // Fetch data from the provided URL
      const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
      const transactions = response.data;

      // Prepare data for insertion
      const formattedTransactions = transactions.map(transaction => ({
        id: transaction.id,
        title: transaction.title,
        price: transaction.price,
        description: transaction.description,
        category: transaction.category,
        image: transaction.image,
        sold: transaction.sold,
        dateOfSale: new Date(transaction.dateOfSale), // Ensure the date is a JavaScript Date object
        createdAt: new Date(), // Optional: Include createdAt and updatedAt if timestamps are enabled
        updatedAt: new Date(),
      }));

      // Insert data into the Transactions table
      await queryInterface.bulkInsert('Transactions', formattedTransactions, {});
    } catch (error) {
      console.error('Error seeding transactions:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    // This will remove all data from the Transactions table
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};














// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
