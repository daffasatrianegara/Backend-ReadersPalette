const {
  UsersModel,
  UserModel,
  AdminModel,
  QuestionModel,
  RequestModel,
  ReportModel,
  BooksModel,
  BookGenreModel,
  RatesModel,
  CommentModel,
  AnswerCommentModel,
} = require("../models");

const dropTables = async () => {
  await AnswerCommentModel.drop();
  await RatesModel.drop();
  await ReportModel.drop();
  await CommentModel.drop();
  await BookGenreModel.drop();
  await RequestModel.drop();
  await QuestionModel.drop();
  await UserModel.drop();
  await AdminModel.drop();
  await UsersModel.drop();
  await BooksModel.drop();
};

const destroy = async () => {
  try {
    await dropTables();
    const response = { message: "all tables successfully destroyed." };
    console.log(response.message);
  } catch (error) {
    console.log("error destroy tables, message:", error);
  }
};

destroy();

module.exports = destroy
