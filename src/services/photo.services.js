const { PhotoRepo } = require('../repositories')

const uploadPhotoUsers = async (id, data) => {
    const { photo_profile } = data
    if(!id && !photo_profile) {
        throw new Error(400)
    }
    const upload = await PhotoRepo.uploadPhoto(id, { photo_profile })
    return upload
}

const uploadPhotoBook = async (id, data) => {
    const { photo } = data
    if(!id && !photo) {
        throw new Error(400)
    }
    const upload = await PhotoRepo.uploadPhotoBooks(id, { photo : photo })
    return upload
}

module.exports = {
    uploadPhotoBook,
    uploadPhotoUsers
}