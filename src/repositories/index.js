const AuthRepo = require('./authUsers.repositories')
const AuthAdminRepo = require('./authAdmin.repositories')
const BooksRepo = require('./book.repositories')
const CommentsRepo = require('./comment.repositories')
const PhotoRepo = require('./photo.repositories')
const AdminRepo = require('./admin.repositories')

module.exports = {
    AuthRepo,
    AuthAdminRepo,
    BooksRepo,
    CommentsRepo,
    PhotoRepo,
    AdminRepo
}