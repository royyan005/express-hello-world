import { Sequelize } from "sequelize";

const db = new Sequelize('app_ppi','user1','123123123',{
    host: "34.69.207.6",
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