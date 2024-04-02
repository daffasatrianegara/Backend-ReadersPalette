const { AdminRepo } = require('../repositories')

const getAllDataUsers = async () => {
    const get = await AdminRepo.getDataUsers()
    return get
}

const getDetailUsers = async (id) => {
    if(!id) {
        throw new Error(400)
    }
    const getDetail = await AdminRepo.getDetailUsers(id)
    return getDetail
}

const deleteDataUsers = async (id) => {
    if (!id) {
        throw new Error(400)
    }
    return await AdminRepo.deleteUser(id)
}

const getAllComment = async () => {
    return await AdminRepo.getAllComment()
}

const softDeleteComments = async (id) => {
    if(!id) {
        throw new Error(400)
    }
    return await AdminRepo.softDeleteComment(id)
}

const hardDeleteComments = async (id) => {
    if(!id) {
        throw new Error(400)
    }
    return await AdminRepo.hardDeleteComment(id)
}

module.exports = {
    getAllDataUsers,
    getDetailUsers,
    deleteDataUsers,
    getAllComment,
    softDeleteComments,
    hardDeleteComments
}