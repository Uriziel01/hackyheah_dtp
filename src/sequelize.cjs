const { Sequelize } = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(process.env.POSTGRES_DATABASE || 'database', process.env.POSTGRES_USER || 'user', process.env.POSTGRES_PASSWORD, {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  dialectOptions: {
    ssl: {
      require: true, // Require SSL
      rejectUnauthorized: false, // Disables certificate validation
    },
  },
});

// Define data models and any other Sequelize configurations if needed

module.exports = sequelize;
