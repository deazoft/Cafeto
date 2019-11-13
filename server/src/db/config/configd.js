const Sequelize = require('sequelize');

const sequelize = new Sequelize('ranking', 'postgres', 'postgres', {
    host: 'postgres',
    dialect: 'postgres'
    });
    
module.exports = sequelize;