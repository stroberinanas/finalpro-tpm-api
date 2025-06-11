import { Sequelize } from "sequelize";

const db = new Sequelize("finalpro", "punyacantik123", "cantik123", {
    host: "34.128.95.54",
    dialect: "mysql",
});

export default db;