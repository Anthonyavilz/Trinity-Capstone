require('dotenv').config()
const { CONNECTION_STRING_COCKTAIL } = process.env

const Sequelize = require('sequelize')
const cocktailSequelize = new Sequelize(CONNECTION_STRING_COCKTAIL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }

})

module.exports = {
    cocktailSequelize
}