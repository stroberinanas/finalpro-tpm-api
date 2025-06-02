import { Sequelize } from "sequelize";
import db from "../config/database.js";
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';


const User = db.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
    }
}, {
    freezeTableName: true
});

db.sync().then(() => console.log("Database Synced"));

export default User;
