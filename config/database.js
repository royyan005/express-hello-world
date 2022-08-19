import { Sequelize } from "sequelize";

const db = new Sequelize('dcgea3asbfrt0f','zzilbkpfpvhrbl','ad4b18dbf114b844be45a6e3fabcb9ff7f18f80e81ff1107ddf71e19fb6d31c1',{
    host: "ec2-3-208-79-113.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
      },
})

export default db;