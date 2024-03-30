const { CommentModel, UserModel } = require('../models')
const { col } = require('sequelize')
const dateFormat = require('../utils/timezone')


const getCommentByBookId = async (id, params) => {
    const page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 24;
    const offset = (page - 1) * limit;
    const getComment = await CommentModel.findAll({
        where: {book_id : id, is_deleted: false},
        attributes: [
            'id',
            'book_id',
            'user_id',
            'comment',
            [col('users.photo_profile'), 'photo'],
            [col('users.name'), 'username'],
            'createdAt'
        ],
        include: [{
            model: UserModel,
            attributes: [],
            as: 'users'
        }],
        limit: limit,
        offset,
        order: ['createdAt', 'DESC']
    })
    return getComment;
}

const uploadComment = async (params) => {
    const { user_id, book_id, comment } = params
    const createdAt = await dateFormat()
    const upload = await CommentModel.create({
        user_id: user_id,
        book_id: book_id,
        comment: comment,
        createdAt: createdAt,
        updatedAt: createdAt
    })
    return upload;
}

const getCommentByPk = async (id) => {
    return CommentModel.findByPk(id, {
        where: { is_deleted : false }
    })
}

const deleteComment = async (id) => {
    return CommentModel.update({
        is_deleted : true
    }, {
        where : { id : id }
    })
}


module.exports = {
    getCommentByBookId,
    uploadComment,
    getCommentByPk,
    deleteComment
}