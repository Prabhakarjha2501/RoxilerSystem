
const Transaction=require('../Service/TransactionService.js')
const listTransactions = async (req, res) => {
  try {
    const { page = 1, perPage = 10, search = '' } = req.query;
    const transactions = await Transaction.getTransactions({ page, perPage, search });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listTransactions,
};













// //const { getTransactions } = require('../Service/TransactionService.js');
// const {getTransactions}=require('../Service/TransactionService.js')
// const listTransactions = async (req, res) => {
//     // Extract year, month, search, page, and perPage from query parameters
//     const { year, month, search, page = 1, perPage = 10 } = req.query;

//     // Default values
//     let searchYear = year || 2022;
//     let searchMonth = month || 'March';

//     try {
//         // Fetch transactions based on provided parameters
//         console.log("dkjfdfdhfjdhfdj");
//         const transactions = await getTransactions(searchYear, searchMonth, search, page, perPage);
//         console.log("Prabhakar");
//         res.json(transactions);
//     } catch (error) {
//         // Handle errors if getTransactions fails
//         res.status(500).json({ error: 'An error occurred while fetching transactions.' });
//     }
// };

// module.exports = {
//     listTransactions
// };

















// const { getTransactions } = require('../Service/TransactionService.js');

// const listTransactions = async (req, res) => {
//     const { month='March', search, page = 1, perPage = 10 } = req.query;
//     console.log(month,search+"------------------");
//     const transactions = await getTransactions(month, search, page, perPage);
//     res.json(transactions);
// };

// module.exports = {
//     listTransactions
// };