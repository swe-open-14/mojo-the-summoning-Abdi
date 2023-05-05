const {db} = require("../db/config.js")
const {DataTypes} = require("sequelize");

const Card = db.define("Card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgURL: DataTypes.STRING,
    
});



module.exports = Card;
