const { Router } = require('express')
const authUsersRoutes = require('./authUsers.routes')
const booksRoutes = require('./book.routes')
const commentRoutes = require('./comment.routes')

const router = Router()

router.use('/auth', authUsersRoutes)
router.use('/books', booksRoutes)
router.use('/comment', commentRoutes)

module.exports = router