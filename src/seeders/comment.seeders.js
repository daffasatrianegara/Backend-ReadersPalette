const { CommentModel } = require('../models')
const dateFormat = require("../utils/timezone");

const arrComment = [
    'buku ini bagus',
    'buku ini keren',
    'aku suka buku ini',
    'menurutku buku ini kurang bagus, karena terlalu monoton',
    'buku ini sangat menarik',
    'sangat disarankan membaca buku ini',
    'buku ini memotivasi saya',
    'buku ini sangat menginspirasi',
    'buku ini patut dibaca oleh semua orang',
    'saya tidak sabar menunggu sekuelnya'
]


const Comments = []

const seedData = (num) => {
    for (let i = 1; i <= num; i++) {
        const bookId = i 
        const id = Math.floor(Math.random() * 3) + 2;
        const comment = arrComment[Math.floor(Math.random() * 10)]
        const seed = {
            user_id : id,
            book_id : bookId,
            comment : comment,
            createdAt: dateFormat(),
            updatedAt: dateFormat()
        }
        Comments.push(seed)
    }
}

const createComments = async () => {
    try {
        const num = 50
        await seedData(num)
        await CommentModel.bulkCreate(Comments)
        const response = {
            status: "berhasil",
            message: "berhasil membuat data komentar...",
          };
          return response;
    } catch (err) {
        throw new Error("gagal membuat data buku, message :", err.message);
    }
}

module.exports = createComments
