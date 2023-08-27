require('dotenv').config()
const { CONNECTION_STRING_TOTK } = process.env

const Sequelize = require('sequelize')
const totkSequelize = new Sequelize(CONNECTION_STRING_TOTK, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }

})

module.exports = {
    totkSequelize
}