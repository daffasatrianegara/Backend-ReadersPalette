const AuthRepo = require('./authUsers.repositories')
const AuthAdminRepo = require('./authAdmin.repositories')
const BooksRepo = require('./book.repositories')
const CommentsRepo = require('./comment.repositories')
const PhotoRepo = require('./photo.repositories')

module.exports = {
    AuthRepo,
    AuthAdminRepo,
    BooksRepo,
    CommentsRepo,
    PhotoRepo
}