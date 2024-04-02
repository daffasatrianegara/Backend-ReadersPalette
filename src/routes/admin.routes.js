const { Router } = require('express')
const { adminControllers, booksControllers } = require('../controllers')
const { authMiddlewares } = require('../middlewares')

const router = Router()

router.get('/users', authMiddlewares.authToken, adminControllers.getAllUsers)
router.get('/users/:id', authMiddlewares.authToken, adminControllers.getDetailUsers)
router.delete('/users/:id', authMiddlewares.authToken, adminControllers.deleteUsers)
router.get('/comments', authMiddlewares.authToken, adminControllers.getAllComments)
router.delete('/comments/soft/:id', authMiddlewares.authToken, adminControllers.softDeleteComments)
router.delete('/comments/hard/:id', authMiddlewares.authToken, adminControllers.hardDeleteComments)
router.get('/books', authMiddlewares.authToken, booksControllers.getAllBooks)
router.get('/books/:id', authMiddlewares.authToken, booksControllers.getDetailBook)

module.exports = router