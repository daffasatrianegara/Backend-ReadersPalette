const { BooksModel, BookGenreModel, RatesModel } = require("../models");
const { Op, col } = require("sequelize");

const getAllBooks = async (params) => {
  const page = parseInt(params.page) || 1;
  const limit = parseInt(params.limit) || 24;
  const offset = (page - 1) * limit;
  const getBooks = await BooksModel.findAll({
    where: { is_deleted: false },
    attributes: [
      "id",
      "photo",
      "title",
      "author",
      "year",
      "category",
      "publisher",
    ],
    limit: limit,
    offset,
    order: [["id", "ASC"]],
  });
  return getBooks;
};

const getDetailBookById = async (id) => {
  const getBook = await BooksModel.findByPk(id, {
    where: { is_deleted: false },
    attributes: [
      "id",
      "photo",
      "title",
      "author",
      "synopsis",
      "year",
      "category",
      "publisher",
      [col("book_genres.genre"), "genre"],
      "updatedAt",
    ],
    include: [
      {
        model: BookGenreModel,
        attributes: [], 
        as: "book_genres",
      },
    ],
  });
  return getBook;
};

const searchBooks = async (search) => {
  const whereClause = [
    { is_deleted: false },
    {
      [Op.or]: [
        {
          title: {
            [Op.substring]: search,
          },
        },
        {
          author: {
            [Op.substring]: search,
          },
        },
        {
          category: {
            [Op.substring]: search,
          },
        },
        {
          publisher: {
            [Op.substring]: search,
          },
        },
      ],
    },
  ];
  
  const getBooks = await BooksModel.findAll({
    where: whereClause,
    attributes: [
      "id",
      "photo",
      "title",
      "author",
      "year",
      "category",
      "publisher",
    ],
    order: [["id", "ASC"]],
  });

  return getBooks;
};


module.exports = {
  getAllBooks,
  getDetailBookById,
  searchBooks,
};
