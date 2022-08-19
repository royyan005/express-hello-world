import { Sequelize } from "sequelize";

const db = new Sequelize('app-ppi','root','',{
    host: "localhost",
    dialect: "mysql"
})

export default db;