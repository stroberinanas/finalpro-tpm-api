import { Sequelize } from "sequelize";

const db = new Sequelize("finalpro", "root", "cantik", {
    host: "34.170.20.249",
    dialect: "mysql",
});

export default db;