const { commentServices } = require("../services");

const getAllComment = async (req, res) => {
  const { page, limit } = req.query;
  const { id } = req.params;
  try {
    const getComment = await commentServices.getAllCommentsByBookId(id, {
      page,
      limit,
    });
    res.status(200).json({
      status: "berhasil",
      message: "data komen pada buku berhasil didapatkan.",
      data: getComment,
    });
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "id kosong...",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    }
  }
};

const uploadCommentUser = async (req, res) => {
  const book_id = req.params.book_id;
  const { user_id, comment } = req.body;
  try {
    const upload = await commentServices.uploadComment({
      book_id: book_id,
      user_id: user_id,
      comment: comment,
    });
    res.status(200).json({
      status: "berhasil",
      message: "data komentar berhasil terupload",
      data: upload,
    });
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "beberapa nilai belum terinput...",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    }
  }
};

const deleteComment = async (req, res) => {
  const { user_id } = req.params;
  const { id } = req.body;
  try {
    const softDelete = await commentServices.deleteComment({
      id: id,
      user_id: user_id,
    });
    res.status(200).json({
        status: "berhasil",
        message: "data berhasil terdelete...",
        data: softDelete,
      });
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "data id kosong...",
      });
    } else if (err.message == 405) {
      res.status(405).json({
        status: "failed",
        message: "data komen tidak ditemukan...",
      });
    } else if (err.message == 401) {
      res.status(401).json({
        status: "failed",
        message: "id user tidak sesuai...",
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
  getAllComment,
  uploadCommentUser,
  deleteComment
};
