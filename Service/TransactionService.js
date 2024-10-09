const { Op,literal} = require('sequelize');
const db = require('../models');
const moment = require('moment');

const getTransactions = async ({ page, perPage, search,month }) => {
  const offset = (page - 1) * perPage;
  const limit = parseInt(perPage, 10);

  const cleanedSearch = search.trim().replace(/^['"]+|['"]+$/g, '');
  const monthNumber = moment().month(month).format('M');
  const searchCondition= {
    [Op.or]: [
      { title: { [Op.iLike]: `%${cleanedSearch}%` } },
      { description: { [Op.iLike]: `%${cleanedSearch}%` } },
      isNaN(cleanedSearch) ? null : { price: { [Op.eq]: parseFloat(cleanedSearch) } }
    ].filter(Boolean)
  };

const monthCondition = literal(`EXTRACT(MONTH FROM "dateOfSale") = ${monthNumber}`);

  const whereCondition ={
    [Op.and]: [
      search ? searchCondition : {},
      month ? monthCondition : {}
    ]
  };

  const options = {
   where:whereCondition,
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
