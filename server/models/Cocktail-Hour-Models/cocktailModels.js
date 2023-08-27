const { DataTypes } = require('sequelize')
const { cocktailSequelize } = require('../../util/cocktailHourDB')

const CocktailUser = cocktailSequelize.define('CocktailUser', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: DataTypes.STRING({length: 35}),
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
})

const Cocktails = cocktailSequelize.define('Cocktails', {
    cocktail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    location_address: DataTypes.STRING,
    notes: DataTypes.TEXT,
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE
});

Cocktails.belongsTo(CocktailUser, { foreignKey: 'user_id' });

module.exports = { CocktailUser, Cocktails }