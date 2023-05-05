// create your User model here
const {db} = require("../db/config.js")
const {DataTypes} = require("sequelize");

const Deck = db.define("deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER,
    
});



module.exports = Deck;