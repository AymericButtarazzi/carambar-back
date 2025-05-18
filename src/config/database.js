const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/data/blagues.sqlite' // Chemin de la BDD locale
});

module.exports = sequelize;
