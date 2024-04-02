const { Router } = require('express');
const { photoControllers } = require('../controllers')
const { photoMiddlewares } = require('../middlewares')
const path = require('path');

const router = Router()
const uploadUser = photoMiddlewares.uploadPhotoUsers
const uploadBook = photoMiddlewares.uploadPhotoBooks
const pathPhotoUsers = path.join(__dirname, '../../public/img/photo-profile')
const pathPhotoBooks = path.join(__dirname, '../../public/img/book')

router.put('/users/:id', uploadUser.single('file'), photoControllers.uploadPhotoUser)
router.put('/books/:id', uploadBook.single('file'), photoControllers.uploadPhotoBooks)
router.use('/users/:filename', (req, res) => {
    const filePath = path.join(pathPhotoUsers, req.params.filename)
    res.sendFile(filePath, (error) => {
        if(error) {
            console.error(error);
            res.status(error.status).end();
        }
    })
})
router.use('/books/:filename', (req, res) => {
    const filePath = path.join(pathPhotoBooks, req.params.filename)
    res.sendFile(filePath, (error) => {
        if(error) {
            console.error(error);
            res.status(error.status).end();
        }
    })
})

module.exports = router