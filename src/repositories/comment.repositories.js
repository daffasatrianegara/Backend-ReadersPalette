const { CommentModel, UserModel } = require('../models')
const { col } = require('sequelize')

const getCommentByBookId = async (params) => {
    const id = params.id
    const page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 24;
    const offset = (page - 1) * limit;
    const getComment = await CommentModel.findAll({
        where: {book_id : id, is_deleted: false},

    })
}