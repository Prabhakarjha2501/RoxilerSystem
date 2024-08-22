
const PieChartService=require('../Service/PieChartService.js');
const getPieChartData = async (req, res) => {
    try {
        const { month, category } = req.query;

        if (!month) {
            return res.status(400).json({ error: 'Month is required' });
        }

            const categories = Array.isArray(category) ? category : [category];

        const categoriesCount = await PieChartService.getCategoryStatistics(month, categories);
        return res.json(categoriesCount);
    } catch (error) {
        console.error('Error fetching pie chart data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getPieChartData
};