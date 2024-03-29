const { DataTypes } = require('sequelize')
const { db } = require('../config')

const Users = db.define('users', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user'
    },
}, {
    tableName: 'users',
    freezeTableName: true,
    timestamps: true
})

module.exports = Users