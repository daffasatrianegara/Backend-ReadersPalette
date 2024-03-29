const { DataTypes } = require('sequelize')
const { db } = require('../config')
const User = require('./user.models')

const Question = db.define('question', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    question: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'question',
    freezeTableName: true,
    timestamps: true
})

User.hasMany(Question, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = Question