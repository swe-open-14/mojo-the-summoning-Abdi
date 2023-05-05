const {db} = require("../db/config.js")
const {DataTypes} = require("sequelize");

const Cards = db.define("card", {
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



module.exports = Cards;
