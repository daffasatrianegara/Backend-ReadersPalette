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

const migrateTables = async () => {
    await UsersModel.sync({ force : true })
    await UserModel.sync({ force : true })
    await AdminModel.sync({ force : true })
    await QuestionModel.sync({ force : true })
    await RequestModel.sync({ force : true })
    await BooksModel.sync({ force : true })
    await BookGenreModel.sync({ force : true })
    await RatesModel.sync({ force : true })
    await CommentModel.sync({ force : true })
    await ReportModel.sync({ force : true })
    await AnswerCommentModel.sync({ force : true })
}

const migrateDB = async () => {
    try {
        await migrateTables()
        const response = {message : 'migrate table and seeding data successfully.'}
        console.log(response.message);
    } catch(error) {
        console.log('error migrating table or seeding data, message :', error)
    }
}

migrateDB()
