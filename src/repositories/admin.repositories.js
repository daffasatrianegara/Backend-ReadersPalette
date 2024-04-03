const { col } = require('sequelize')
const { UsersModel, UserModel, CommentModel } = require('../models')
const dateFormat = require('../utils/timezone')

const getDataUsers = async () => {
    return await UsersModel.findAll({
        where : { role : 'user' },
        attributes : [
            'id',
            'email',
            [col('user.name'), 'username'],
            [col('user.age'), 'age'],
            [col('user.gender'), 'gender'],
            'createdAt',
        ], include : [{
            model : UserModel,
            attributes : [],
            as : 'user'
        }]
    })
}

const getDetailUsers = async (id) => {
    return await UsersModel.findByPk(id, {
        where : { role : 'user' },
        attributes : [
            'id',
            'email',
            [col('user.photo_profile'), 'photo'],
            [col('user.name'), 'username'],
            [col('user.bio'), 'bio'],
            [col('user.age'), 'age'],
            [col('user.gender'), 'gender'],
            [col('user.phone_number'), 'phone_number'],
            [col('user.createdAt'), 'created_at'],
            'createdAt',
            'updatedAt',
        ], include : [{
            model : UserModel,
            attributes : [],
            as : 'user'
        }]
    })
}

const deleteUser = async (id) => {
    return await UsersModel.destroy({
        where : { role : 'user', id : id }
    })
}

const getAllComment = async () => {
    return await CommentModel.findAll({
        where : { is_deleted : false },
        order : [['book_id', 'ASC']]
    })
}

const softDeleteComment = async (id) => {
    return CommentModel.update({
        is_deleted : true,
        updatedAt : dateFormat(),
    }, {
        where : { id : id },
    })
}

const hardDeleteComment = async (id) => {
    return CommentModel.destroy({
        where : { id : id }
    })
}

module.exports = {
    getDataUsers,
    getDetailUsers,
    deleteUser,
    getAllComment,
    softDeleteComment,
    hardDeleteComment
}