import { Sequelize } from "sequelize";

const db = new Sequelize('app-ppi','root','123123',{
    host: "23.251.150.1",
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