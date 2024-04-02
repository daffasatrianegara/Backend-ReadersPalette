const authUsersControllers = require('./authUsers.controllers')
const authAdminControllers = require('./authAdmin.controllers')
const booksControllers = require('./book.controllers')
const commentsControllers = require('./comment.controllers')
const photoControllers = require('./photo.controllers')
const adminControllers = require('./admin.controllers')

module.exports = {
    authUsersControllers,
    authAdminControllers,
    booksControllers,
    commentsControllers,
    photoControllers,
    adminControllers
}