const { adminServices } = require('../services')

const getAllUsers = async (req, res) => {
    try {
        const response = await adminServices.getAllDataUsers()
        res.status(200).json({
            status : 'berhasil',
            message : 'berhasil mengambil data pengguna...',
            data : response
        })
    } catch (err) {
        res.status(500).json({
            status : 'failed',
            message : err.message
        })
    }
}

const getDetailUsers = async (req, res) => {
    const { id } = req.params
    try {
        const response = await adminServices.getDetailUsers(id)
        res.status(200).json({
            status : 'berhasil',
            message : 'berhasil mendapatkan detail data pengguna',
            data : response
        })
    } catch (err) {
        if(err.message == 400) {
            res.status(400).json({
                status : 'failed',
                message : 'id yang anda kirim kosong...'
            })
        } else {
            res.status(500).json({
                status : 'failed',
                message : err.message
            })
        }
        
    }
}

const deleteUsers = async (req, res) => {
    const { id } = req.params
    try {
        await adminServices.deleteDataUsers(id)
        res.status(200).json({
            status : 'berhasil',
            message : 'data pengguna berhasil dihapus...'
        })
    } catch (err) {
        if(err.message == 400) {
            res.status(400).json({
                status : 'failed',
                message : 'id yang anda kirim kosong...'
            })
        } else {
            res.status(500).json({
                status : 'failed',
                message : err.message
            })
        }
    }
}

const getAllComments = async (req, res) => {
    try {
        const response = await adminServices.getAllComment()
        res.status(200).json({
            status : 'berhasil',
            message : 'data komentar berhasil didapatkan...',
            data : response
        })
    } catch (err) {
        res.status(500).json({
            status : 'failed',
            message : err.message
        })
    }
}

const softDeleteComments = async (req, res) => {
    const { id } = req.params
    try {
        await adminServices.softDeleteComments(id)
        res.status(200).json({
            status : 'berhasil',
            message : 'data komentar berhasil terdelete (soft)...'
        })
    } catch (err) {
        if(err.message == 400) {
            res.status(400).json({
                status : 'failed',
                message : 'id yang anda kirim kosong...'
            })
        } else {
            res.status(500).json({
                status : 'failed',
                message : err.message
            })
        }
    }
}

const hardDeleteComments = async (req, res) => {
    const { id } = req.params
    try {
        await adminServices.hardDeleteComments(id)
        res.status(200).json({
            status : 'berhasil',
            message : 'data komentar berhasil terhapus (hard)...'
        })
    } catch (err) {
        if(err.message == 400) {
            res.status(400).json({
                status : 'failed',
                message : 'id yang anda kirim kosong...'
            })
        } else {
            res.status(500).json({
                status : 'failed',
                message : err.message
            })
        }
    }
}

module.exports = {
    getAllUsers,
    getDetailUsers,
    deleteUsers,
    getAllComments,
    softDeleteComments,
    hardDeleteComments
}