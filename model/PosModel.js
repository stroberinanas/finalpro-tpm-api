import { DataTypes } from 'sequelize';
import db from '../config/database.js'; // sesuaikan path config database

const Pos = db.define('pos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    basecamp_id: {
        type: DataTypes.INTEGER,
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
    ketinggian: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    longitude: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    latitude: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'createdAt',
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'updatedAt',
    },
}, {
    timestamps: true, // Sequelize otomatis kelola createdAt dan updatedAt
    freezeTableName: true, // Supaya nama tabel tidak diubah jadi plural
});

export default Pos;
