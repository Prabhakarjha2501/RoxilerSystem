const express = require('express');
const Combinerouter = express.Router();
const CombineController=require('../Controller/CombineController.js');
Combinerouter.get('/combine', CombineController.getCombinedData);

module.exports = Combinerouter;