// models/db.js
const sql = require("mysql2/promise")
const { Sequelize, DataTypes } = require('sequelize');
//To access environment variables
const dotenv = require("dotenv")
dotenv.config()

//DATABASE connection
sql.
    createConnection({ user: process.env.USER , password: process.env.PASSWORD })
    .then(()=>
    {
        console.log("db CONNECTED successfully")
    })

//ORM 
const sequelize = new Sequelize(
    DATABASE=process.env.DATABASE,
    USER=process.env.USER,
    PASSWORD=process.env.PASSWORD,
    {
    host:process.env.HOST,
    dialect: "mysql",
});
const db={};

db.sequelize=sequelize
//sequelizing table
db.Report = require("./Reports")(sequelize, DataTypes);
db.Employee = require("./Employees")(sequelize, DataTypes);
db.Projects = require("./project_fact")(sequelize, DataTypes);
//Synchronizing Schema table with sequelize table
db.sequelize.sync({ force: false }).then(() => {
    console.log("re-sync done"); 
  });

module.exports = db;
