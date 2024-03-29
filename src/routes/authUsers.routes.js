const { Router } = require('express')
const { authUsersControllers } = require('../controllers')

const router = Router()

router.post('/login', authUsersControllers.login)
router.post('/register', authUsersControllers.register)

module.exports = router