const { Router } = require('express')
const authUsersRoutes = require('./authUsers.routes')
const authAdminRoutes = require('./authAdmin.routes')
const booksRoutes = require('./book.routes')
const commentRoutes = require('./comment.routes')
const photoRoutes = require('./photo.routes')
const adminRoutes = require('./admin.routes')

const router = Router()

router.use('/auth', authUsersRoutes)
router.use('/admin', authAdminRoutes)
router.use('/books', booksRoutes)
router.use('/comment', commentRoutes)
router.use('/photo', photoRoutes)
router.use('/admin', adminRoutes)

module.exports = router