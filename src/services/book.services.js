const { BooksRepo } = require('../repositories')

const getAllBooks = async (res) => {
    const getData = await BooksRepo.getAllBooks(res)
    if(!getData) {
        throw new Error(500)
    }
    const response = { data : getData }
    return response
}

const getDetailBook = async (id) => {
    if(!id) {
        throw new Error(400)
    }

    const getData = await BooksRepo.getDetailBookById(id)
    if(!getData) {
        throw new Error(500)
    }
    const response = { data : getData }
    return response
}

const searchBooks = async (keywords) => {
    if(!keywords) {
        throw new Error(400)
    }
    const search = keywords.toLowerCase()
    const getData = await BooksRepo.searchBooks(search)
    const response = {
        message : getData.length === 0 ? 'Data buku tidak ditemukan' : 'Data buku berhasil ditemukan',
        data : getData,
    }

    return response
}

module.exports = {
    getAllBooks,
    getDetailBook,
    searchBooks
}