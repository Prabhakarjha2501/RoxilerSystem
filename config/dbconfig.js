require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
     dialect: 'postgres',
    pool: {
        max: Number(process.env.DB_MAX_POOL_CONNECTIONS),
        min: Number(process.env.DB_MIN_POOL_CONNECTIONS),
        acquire: Number(process.env.DB_CONNECTION_ACQUIRE_TIMEOUT),
        idle: Number(process.env.DB_CONNECTION_IDLE_TIMEOUT),
    },
});

module.exports = sequelize;
