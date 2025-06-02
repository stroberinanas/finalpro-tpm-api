import { Sequelize } from "sequelize";

const db = new Sequelize("finalpro", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;