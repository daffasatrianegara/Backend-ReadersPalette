const { Router } = require('express')
const { authAdminControllers } = require('../controllers')

const router = Router()

router.post('/login', authAdminControllers.login)
router.post('/register', authAdminControllers.registerAdmin)

module.exports = router