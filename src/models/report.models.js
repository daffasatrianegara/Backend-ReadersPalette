const { DataTypes } = require('sequelize')
const { db } = require('../config')
const User = require('./user.models')
const Comment = require('./comment.models')

const Report = db.define('report', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    comment_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    statement: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'Terjadi Pelanggaran dalam berkomentar'
    }
}, {
    tableName: 'report',
    freezeTableName: true,
    timestamps: true
})

User.hasMany(Report, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.hasMany(Report, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
})

module.exports = Report