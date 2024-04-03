const { Router } = require('express')
const { booksControllers } = require('../controllers')

const router = Router()

router.get('/', booksControllers.getAllBooks)
router.get('/:id', booksControllers.getDetailBook)
router.get('/search/data', booksControllers.searchBooks)

module.exports = router