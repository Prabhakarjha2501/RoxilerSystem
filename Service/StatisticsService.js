const { Op } = require('sequelize');
const moment = require('moment');
const { Transaction } = require('../models');

const getStatisticsForMonth = async (month) => {
    const monthNumber = moment().month(month).format('M');
    const transactions = await Transaction.findAll({
        where: {
            [Op.or]: [
                {
                    dateOfSale: {
                        [Op.and]: [
                            {
                                [Op.gte]: moment(`2021-${monthNumber}-01`).startOf('month').toDate()
                            },
                            {
                                [Op.lte]: moment(`2021-${monthNumber}-01`).endOf('month').toDate()
                            }
                        ]
                    }
                },
                {
                    dateOfSale: {
                        [Op.and]: [
                            {
                                [Op.gte]: moment(`2022-${monthNumber}-01`).startOf('month').toDate()
                            },
                            {
                                [Op.lte]: moment(`2022-${monthNumber}-01`).endOf('month').toDate()
                            }
                        ]
                    }
                }
            ]
        }
    });

    const totalSaleAmount = transactions
        .filter(transaction => transaction.sold)
        .reduce((sum, transaction) => sum + transaction.price, 0);

    const totalSoldItems = transactions.filter(transaction => transaction.sold).length;
    const totalNotSoldItems = transactions.filter(transaction => !transaction.sold).length;

    return {
        totalSaleAmount,
        totalSoldItems,
        totalNotSoldItems
    };
};

module.exports = {
    getStatisticsForMonth
};
