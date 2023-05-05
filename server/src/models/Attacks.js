const {db} = require("../db/config.js")
const {DataTypes} = require("sequelize");

const Attacks = db.define("attack", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
    
});


module.exports = Attacks;