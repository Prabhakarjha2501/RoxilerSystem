const  getStatisticsService  = require('../Service/StatisticsService.js');

const getStatistics = async (req, res) => {
    try {
        const month = req.query.month; 
        if (!month) {
            return res.status(400).json({ error: 'Month is required' });
        }

        const statistics = await getStatisticsService.getStatisticsForMonth(month);
        return res.status(200).json(statistics);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while fetching statistics' });
    }
};

module.exports = {
    getStatistics
};