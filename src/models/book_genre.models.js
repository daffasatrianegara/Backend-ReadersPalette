const { DataTypes } = require('sequelize')
const { db } = require('../config')
const Book = require('./books.models')

const Book_genre = db.define('book_genre', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    book_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'book_genre',
    freezeTableName: true,
    timestamps: true
})

Book.hasMany(Book_genre, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
})

module.exports = Book_genre