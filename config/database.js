import { Sequelize } from "sequelize";

const db = new Sequelize('sql6522339','sql6522339','PPpRUdEEf5',{
    host: "sql6.freemysqlhosting.net",
    dialect: "mysql",
    // dialectOptions: {
    //     ssl: {
    //       require: true, // This will help you. But you will see nwe error
    //       rejectUnauthorized: false // This line will fix new error
    //     }
    //   },
    logQueryParameters: true
})

export default db;