/**
 * Import MySQL database configuration
 */
const dbConfig = require('../config/db.config');

const Sequelize = require("sequelize"); // Initialize sequence

/**
 * Configure sequelize with DataBase
 */
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.game = require("./appDetailsSchema")(sequelize, Sequelize);

module.exports = db;