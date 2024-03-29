const { DataTypes } = require('sequelize')
const { db } = require('../config')
const User = require('./user.models')
const Comment = require('./comment.models')

const Answer_comment = db.define('answer_comment', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    comment_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    tableName: 'answer_comment',
    freezeTableName: true,
    timestamps: true
})

User.hasMany(Answer_comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.hasMany(Answer_comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE'
})

module.exports = Answer_comment