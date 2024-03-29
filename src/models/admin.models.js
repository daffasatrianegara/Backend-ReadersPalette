const { DataTypes } = require('sequelize')
const { db } = require('../config')
const Users = require('./users.models')

const Admin = db.define('admin', {
    admin_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('Pria', 'Wanita'),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
}, {
    tableName: 'admin',
    freezeTableName: true,
    timestamps: true
})

Users.hasOne(Admin, {
    foreignKey: 'admin_id',
    onDelete: 'CASCADE'
})

module.exports = Admin