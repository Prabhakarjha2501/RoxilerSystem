const { Op } = require('sequelize');
const db = require('../models');

const getTransactions = async ({ page, perPage, search }) => {
  const offset = (page - 1) * perPage;
  const limit = parseInt(perPage, 10);

  const cleanedSearch = search.trim().replace(/^['"]+|['"]+$/g, '');
  const whereCondition = {
    [Op.or]: [
      { title: { [Op.iLike]: `%${cleanedSearch}%` } },
      { description: { [Op.iLike]: `%${cleanedSearch}%` } },
      isNaN(cleanedSearch) ? null : { price: { [Op.eq]: parseFloat(cleanedSearch) } }
    ].filter(Boolean)
  };

  const options = {
    where: search ? whereCondition : {},
    offset,
    limit,
    order: [['dateOfSale', 'DESC']],
  };

  const { rows: transactions, count: totalItems } = await db.Transaction.findAndCountAll(options);

  return {
    data: transactions,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: parseInt(page, 10),
  };
};

module.exports = {
  getTransactions,
};
