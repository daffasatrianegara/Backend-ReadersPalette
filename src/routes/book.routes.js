const { Router } = require('express')
const { booksControllers } = require('../controllers')

const router = Router()

router.get('/', booksControllers.getAllBooks)
router.get('/:id', booksControllers.getDetailBook)
router.post('/search', booksControllers.searchBooks)

module.exports = router