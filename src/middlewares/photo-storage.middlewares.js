const multer = require('multer')
const path = require('path')

const storageUsers = (req, file, cb) => {
    const userPath = path.join(__dirname, '../../public/img/photo-profile')
    cb(null, userPath)
}

const storageBooks = (req, file, cb) => {
    const userPath = path.join(__dirname, '../../public/img/book')
    cb(null, userPath)
}

const uploadPhotoUsers = multer({
    limits : {
        fileSize : 15000000
    },
    storage: multer.diskStorage({
        destination: storageUsers,
        filename: (req, file, cb) => {
            cb(null, 'users-photo'+ Date.now() +path.extname(file.originalname))
        }
    })
})

const uploadPhotoBooks = multer({
    limits : {
        fileSize : 15000000
    },
    storage: multer.diskStorage({
        destination: storageBooks,
        filename: (req, file, cb) => {
            cb(null, 'books-photo'+ Date.now() +path.extname(file.originalname))
        }
    })
})

module.exports = {
    uploadPhotoUsers,
    uploadPhotoBooks
}