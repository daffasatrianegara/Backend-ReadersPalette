const { DataTypes } = require('sequelize')
const { db } = require('../config')

const Books = db.define('books', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    photo: {
        type: DataTypes.STRING,
        defaultValue: 'book.png',
        allowNull: 'false'
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    synopsis: {
        type: DataTypes.TEXT,
    },
    year: {
        type: DataTypes.DATE,
    },
    category: {
        type: DataTypes.ENUM('Novel', 'Majalah', 'Komik', 'Buku'),
        defaultValue: 'Buku',
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING,
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false 
    }
}, {
    tableName: 'books',
    freezeTableName: true,
    timestamps: true
})

module.exports = Books