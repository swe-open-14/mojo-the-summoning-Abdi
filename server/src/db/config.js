// add your database connection here

const { Sequelize} = require("sequelize");
const path = require("path");
// this represnets the database which i'll be interacting with on behalf of the db
const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite"),
    logging: false
}) 



module.exports = {
    db,
    
}