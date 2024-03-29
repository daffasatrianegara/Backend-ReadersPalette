const { DataTypes } = require("sequelize");
const { db } = require("../config");
const User = require('./user.models')
const Books = require('./books.models')

const Comment = db.define('comment', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  book_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
    tableName: 'comment',
    freezeTableName: true,
    timestamps: true
});


User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Books.hasMany(Comment, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
})
module.exports = Comment
