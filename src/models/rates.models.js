const { DataTypes } = require('sequelize')
const { db } = require('../config')
const User = require('./user.models')
const Books = require('./books.models')

const Rates = db.define('rates', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    book_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 5},
        allowNull: false
    }
}, {
    tableName: 'rates',
    freezeTableName: true,
    timestamps: true
})

User.hasMany(Rates, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Books.hasMany(Rates, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
})

module.exports = Rates