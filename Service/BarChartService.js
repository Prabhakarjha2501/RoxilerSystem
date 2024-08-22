const { Op } = require('sequelize');
const moment = require('moment');
const db = require('../models');

const getPriceRangeDataForMonth = async (month) => {
    const monthNumber = moment().month(month).format('M');
    const startDate = moment().month(monthNumber).startOf('month').format('YYYY-MM-DD');
    const endDate = moment().month(monthNumber).endOf('month').format('YYYY-MM-DD');
    
    const priceRanges = [
        { min: 0, max: 100 },
        { min: 101, max: 200 },
        { min: 201, max: 300 },
        { min: 301, max: 400 },
        { min: 401, max: 500 },
        { min: 501, max: 600 },
        { min: 601, max: 700 },
        { min: 701, max: 800 },
        { min: 801, max: 900 },
        { min: 901, max: Infinity }
    ];
    
    const results = await Promise.all(priceRanges.map(async (range) => {
        const count = await db.Transaction.count({
            where: {
                price: { [Op.between]: [range.min, range.max] },
                dateOfSale: { 
                    [Op.between]: [
                        `${moment().year(2021).month(monthNumber - 1).startOf('month').format('YYYY-MM-DD')}`,
                        `${moment().year(2022).month(monthNumber - 1).endOf('month').format('YYYY-MM-DD')}`
                    ]
                }
            }
        });
        return {
            range: range.max === Infinity ? `${range.min}+` : `${range.min} - ${range.max}`,
            count
        };
    }));

    return results;
};

module.exports = { getPriceRangeDataForMonth };
