const { CommentsRepo } = require('../repositories')

const getAllCommentsByBookId = async (id, data) => {
    if(!id) {
        throw new Error(400)
    }

    const getCommment = await CommentsRepo.getCommentByBookId(id, data)
    return getCommment
}

const uploadComment = async (data) => {
    const { user_id, book_id, comment } = data
    if(!user_id && !book_id && !comment) {
        throw new Error(400)
    }
    const upload = await CommentsRepo.uploadComment({
        user_id : user_id,
        book_id : book_id,
        comment : comment
    })
    
    return upload
}

const deleteComment = async (data) => {
    const { id, user_id } = data
    if(!id && !user_id) {
        throw new Error(400)
    }

    const checkComment = await CommentsRepo.getCommentByPk(id)
    if(!checkComment) {
        throw new Error(405)
    }
    const checkId = await checkComment.dataValues.user_id === parseInt(user_id)
    if(!checkId) {
        throw new Error(401)
    }
    const deleteComment = await CommentsRepo.deleteComment(id)
    return deleteComment
}


module.exports = {
    getAllCommentsByBookId,
    uploadComment,
    deleteComment
}