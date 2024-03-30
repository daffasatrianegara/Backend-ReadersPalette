const { CommentModel, UserModel } = require("../models");
const dateFormat = require("../utils/timezone");
const { col } = require('sequelize')
const { db } = require("../config");

const getCommentByBookId = async (id, params) => {
  const page = parseInt(params.page) || 1;
  const limit = parseInt(params.limit) || 24;
  const offset = (page - 1) * limit;
  const getComment = await CommentModel.findAll({
    attributes: [
        'id',
        'book_id',
        'user_id',
        'comment',
        [col('user.photo_profile'), 'photo'],
        [col('user.name'), 'username'],
        'createdAt'
    ],
    include: [{
        model: UserModel,
        attributes: [],
        as: "user"
    }],
    where: {
        book_id: id,
        is_deleted: false
    },
    limit: limit,
    offset: offset,
    order: [['createdAt', 'DESC']]
});

//   const getComment = await db.query(
//     `
//       SELECT DISTINCT
//           comment.id,
//           comment.book_id,
//           comment.user_id,
//           comment.comment,
//           users.photo_profile AS photo,
//           users.name AS username,
//           comment.createdAt
//       FROM 
//           comment
//       LEFT JOIN 
//           user AS users ON comment.user_id = users.user_id
//       WHERE 
//           comment.book_id = :bookId AND 
//           comment.is_deleted = false
//       ORDER BY 
//           comment.createdAt DESC
//       LIMIT :limit OFFSET :offset;
//     `,
//     {
//       replacements: { bookId: id, limit, offset },
//     }
//   );
  return getComment;
};

const uploadComment = async (params) => {
  const { user_id, book_id, comment } = params;
  const createdAt = await dateFormat();
  const upload = await CommentModel.create({
    user_id: user_id,
    book_id: book_id,
    comment: comment,
    createdAt: createdAt,
    updatedAt: createdAt,
  });
  return upload;
};

const getCommentByPk = async (id) => {
  return CommentModel.findByPk(id, {
    where: { is_deleted: false },
  });
};

const deleteComment = async (id) => {
  return CommentModel.update(
    {
      is_deleted: true,
    },
    {
      where: { id: id },
    }
  );
};

module.exports = {
  getCommentByBookId,
  uploadComment,
  getCommentByPk,
  deleteComment,
};
