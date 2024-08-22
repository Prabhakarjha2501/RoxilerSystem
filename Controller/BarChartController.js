
const getPriceRangeData=require('../Service/BarChartService.js');

const getBarChartData = async (req, res) => {
    try {
        const { month } = req.query;
        if (!month) {
            return res.status(400).json({ message: 'Month is required' });
        }
        const data = await getPriceRangeData.getPriceRangeDataForMonth(month);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getBarChartData };