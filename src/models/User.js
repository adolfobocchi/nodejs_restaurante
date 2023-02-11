import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../connection/mysql.js';

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'users',
    timestamps: false
});