import { Sequelize } from "sequelize";

const db = new Sequelize('buovpvbrsol4jjcxvndb','uyooujx1odwfi0tw','gPLk4PV7X5EJYaLLHJyD',{
    host: "buovpvbrsol4jjcxvndb-mysql.services.clever-cloud.com",
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