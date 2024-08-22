
const  CombineService= require('../Service/CombineService.js')
const getCombinedData = async (req, res) => {
  const { month, page = 1, perPage = 10, search = '' } = req.query;
  
  try {
    const combinedData = await CombineService.getCombinedData(month, page, perPage, search);
    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCombinedData
};