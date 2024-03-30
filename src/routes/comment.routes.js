const { commentsControllers } = require('../controllers')
const { Router } = require('express')

const router = Router()

router.get('/:id', commentsControllers.getAllComment)
router.post('/:book_id', commentsControllers.uploadCommentUser)
router.delete('/:user_id', commentsControllers.deleteComment)

module.exports = router
