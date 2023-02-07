import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../connection/mysql.js';

export const Prato = sequelize.define('Prato', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    nome: {
        type: DataTypes.STRING,
    },
    ingredientes: {
        type: DataTypes.STRING,
    },
    rendimento: {
        type: DataTypes.INTEGER,
    },
    categoria: {
        type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'pratos',
    timestamps: false
});