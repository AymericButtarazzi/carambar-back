const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/data/blagues.sqlite' 
});

module.exports = sequelize;
