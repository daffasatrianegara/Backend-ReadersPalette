const authServices = require('./authUsers.services')
const authAdminServices = require('./authAdmin.services')
const booksServices = require('./book.services')
const commentServices = require('./comment.services')
const photoServices = require('./photo.services')
const adminServices = require('./admin.services')

module.exports = {
    authServices,
    authAdminServices,
    booksServices,
    commentServices,
    photoServices,
    adminServices
}