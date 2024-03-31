const { BooksModel, BookGenreModel, RatesModel } = require("../models");
const dateFormat = require("../utils/timezone");

const authors = [
  "john doe",
  "alice",
  "ryan gosling",
  "steven shayne",
  "john shayna",
  "kim ryujin",
];
const years = [2003, 2004, 2005, 2006, 2007, 2010, 2022, 2023, 2008];
const categories = ["Novel", "Majalah", "Komik", "Buku"];
const publishers = [
  "gunung api",
  "merbabu publisher",
  "eriva media",
  "slamet salim",
  "rusdi jomocek",
];
const synopsis =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Books = [];
const BooksGenre = [];
const BooksRates = [];

const seedDataBooks = async (num) => {
  for (let i = 1; i <= num; i++) {
    const book = `buku ${i}`;
    const author = authors[Math.floor(Math.random() * 6)];
    const year = years[Math.floor(Math.random() * 9)];
    const category = categories[Math.floor(Math.random() * 4)];
    const publisher = publishers[Math.floor(Math.random() * 5)];
    const seed = {
      title: book,
      author: author,
      synopsis: synopsis,
      year: year,
      category: category,
      publisher: publisher,
      createdAt: dateFormat(),
      updatedAt: dateFormat(),
    };
    Books.push(seed);
  }
};

const genres = [
  "fiksi",
  "aksi",
  "pertualangan",
  "horror",
  "ilmiah",
  "sastra",
  "ilmu pengetahuan",
];

const seetDataGenres = (num) => {
  for (let i = 1; i <= num; i++) {
    const genre = genres[Math.floor(Math.random() * 7)];
    const id = Math.floor(Math.random() * num) + 1;
    const seed = {
      book_id: id,
      genre: genre,
      createdAt: dateFormat(),
      updatedAt: dateFormat(),
    };
    BooksGenre.push(seed);
  }
};

const rates = [1, 2, 3, 4, 5];

const seedDataRates = (num) => {
  const bookIds = Array.from({ length: num }, (_, index) => index + 1);
  for (let i = 1; i <= num; i++) {
    const rate = rates[Math.floor(Math.random() * 5)];
    const id = Math.floor(Math.random() * 3) + 2;
    const bookId = Math.ceil(Math.random() * bookIds.length);
    const seed = {
      book_id: bookId,
      user_id: id,
      rate: rate,
      createdAt: dateFormat(),
      updatedAt: dateFormat(),
    };
    BooksRates.push(seed);
  }
};

const createBooks = async () => {
  try {
    const num = 50;
    await seedDataBooks(num);
    await seetDataGenres(num);
    await seedDataRates(num);
    await BooksModel.bulkCreate(Books);
    await BookGenreModel.bulkCreate(BooksGenre);
    await RatesModel.bulkCreate(BooksRates);
    const response = {
      status: "berhasil",
      message: "berhasil membuat data buku...",
    };
    return response;
  } catch (err) {
    throw new Error("gagal membuat data buku, message :", err.message);
  }
};

module.exports = createBooks;
