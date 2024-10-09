const axios = require('axios');
const moment = require('moment');

const BASE_URL = 'http://localhost:5000/api'; // Base URL for the APIs

const getCombinedData = async (month, page = 1, perPage = 10, search = '') => {
  try {
    
    const barChartResponse = await axios.get(`${BASE_URL}/barchart`, { params: { month } });

    
    const statisticsResponse = await axios.get(`${BASE_URL}/statistics`, { params: { month } });

    const transactionsResponse = await axios.get(`${BASE_URL}/transactions`, { params: { page, perPage, search,month } });

    return {
      barChart: barChartResponse.data,
      statistics: statisticsResponse.data,
      transactions: transactionsResponse.data
    };
  } catch (error) {
    throw new Error('Error fetching data from APIs');
  }
};

module.exports = {
  getCombinedData
};