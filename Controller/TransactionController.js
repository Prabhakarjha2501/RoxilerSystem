const Transaction=require('../Service/TransactionService.js')
const listTransactions = async (req, res) => {
  try {
    const { page = 1, perPage = 10, search = '',month } = req.query;
    const transactions = await Transaction.getTransactions({ page, perPage, search,month });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listTransactions,
};
