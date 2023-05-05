const {db} = require("../db/config.js")
const {DataTypes} = require("sequelize");

const Attack = db.define("Attack", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
    
});


module.exports = Attack;