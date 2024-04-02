const { DataTypes } = require('sequelize')
const { db, users_url } = require('../config')
const Users = require('./users.models')

const User = db.define('user', {
    user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
    },
    photo_profile: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: `${users_url}noprofil.png`
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    bio: {
        type: DataTypes.TEXT,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM('pria', 'wanita'),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.ENUM('active', 'banned'),
        defaultValue: 'active',
        allowNull: false
    }
}, {
    tableName: 'user',
    freezeTableName: true,
    timestamps: true
})

Users.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = User