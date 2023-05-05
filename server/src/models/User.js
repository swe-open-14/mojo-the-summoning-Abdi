// create your User model here
const {db} = require("../db/config.js")
const {DataTypes} = require("sequelize");

const User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,

    
});


module.exports = User;