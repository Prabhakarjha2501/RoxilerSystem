const { Op } = require('sequelize');
const moment = require('moment');
const db = require('../models');


const getCategoryStatistics = async (month, categories) => {
    const startDate = moment().year(2021).month(month).startOf('month').toDate();
    const endDate = moment().year(2021).month(month).endOf('month').toDate();


    const categoriesCount = await db.Transaction.findAll({
        attributes: [
            'category',
            [db.Sequelize.fn('COUNT', db.Sequelize.col('category')), 'itemCount']
        ],
        where: {
            dateOfSale: {
                [Op.between]: [startDate, endDate]
            },
            category: {
                [Op.in]: categories
            }
        },
        group: 'category',
        raw: true
    });

    return categoriesCount;
};

module.exports = {
    getCategoryStatistics
};
