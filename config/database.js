import { Sequelize } from "sequelize";

const db = new Sequelize('app-ppi','postgres','123123',{
    host: "localhost",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
      },
})

export default db;