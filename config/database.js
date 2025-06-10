import { Sequelize } from "sequelize";

const db = new Sequelize("finalpro", "admin", "12345678", {
    host: "34.128.95.54",
    dialect: "mysql",
});

export default db;