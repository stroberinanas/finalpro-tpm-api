import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Basecamp = db.define("basecamp", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    elevation: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    photo: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    open_time: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    hiking_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    rules: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    url_maps: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: true, // created_at dan updated_at otomatis
});

export default Basecamp;
