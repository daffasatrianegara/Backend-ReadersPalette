const { UserModel, BooksModel } = require('../models')
const dateFormat = require("../utils/timezone");

const uploadPhoto = async (id, params) => {
    const { photo_profile } = params
    const upload = await UserModel.update({
        photo_profile : photo_profile,
        updatedAt : dateFormat(),
    }, 
    {
        where : { user_id : id }
    })
    return upload
}

const uploadPhotoBooks = async (id, params) => {
    const { photo } = params
    const upload = await BooksModel.update({
        photo : photo,
        updatedAt : dateFormat()
    }, {
        where : { id : id, is_deleted : false }
    })
    return upload
}

module.exports = {
    uploadPhoto,
    uploadPhotoBooks
}