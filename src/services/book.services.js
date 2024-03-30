const { BooksRepo } = require('../repositories')

const getAllBooks = async (res) => {
    const getData = await BooksRepo.getAllBooks(res)
    if(!getData) {
        throw new Error(500)
    }

    return getData
}

const getDetailBook = async (id) => {
    if(!id) {
        throw new Error(400)
    }

    const getData = await BooksRepo.getDetailBookById(id)
    if(!getData) {
        throw new Error(500)
    }

    return getData
}

const searchBooks = async (keywords) => {
    if(!keywords) {
        throw new Error(400)
    }
    const search = keywords.toLowerCase()
    const getData = await BooksRepo.searchBooks(search)

    return getData
}

module.exports = {
    getAllBooks,
    getDetailBook,
    searchBooks
}