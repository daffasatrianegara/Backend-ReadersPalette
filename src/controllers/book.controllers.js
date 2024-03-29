const { booksService } = require("../services");

const getAllBooks = async (req, res) => {
  const { page, limit } = req.query;
  try {
    const getBooks = await booksService.getAllBooks({
      page: page,
      limit: limit,
    });
    res.status(200).json({ status: "berhasil", data: getBooks });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "internal server error",
    });
  }
};

const getDetailBook = async (req, res) => {
  const id = req.params.id;
  try {
    const getBook = await booksService.getDetailBook(id);
    res.status(200).json({ status: "berhasil", data: getBook });
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "data id kosong...",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    }
  }
};

const searchBooks = async (req, res) => {
  const { keywords } = req.body;
  try {
    const search = await booksService.searchBooks(keywords);
    res.status(200).json({ data: search });
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "data keywords kosong...",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    }
  }
};

module.exports = {
  getAllBooks,
  getDetailBook,
  searchBooks,
};
