const { DataTypes } = require('sequelize')
const { db } = require('../config')
const User = require('./user.models')

const Request = db.define('request', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    request: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'request',
    freezeTableName: true,
    timestamps: true
})

User.hasMany(Request, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = Request