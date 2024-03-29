const { Router } = require('express')
const authUsersRoutes = require('./authUsers.routes')
const booksRoutes = require('./book.routes')

const router = Router()

router.use('/auth', authUsersRoutes)
router.use('/books', booksRoutes)

module.exports = router