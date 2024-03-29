const { UsersModel, UserModel } = require("../models");
const dateFormat = require('../middlewares/timezone')

const getUsersByEmail = async (email) => {
  return UsersModel.findOne({
    where: {
      email: email,
    },
  });
};

const addUsers = async (params) => {
  const { email, password } = params;
  const { name, age, gender, phone_number } = params;
  const createdAt = dateFormat

  const addUsers = await UsersModel.create({
    email: email,
    password: password,
    createdAt: createdAt,
    updatedAt: createdAt
  });

  const users_id = addUsers.id

  const addUser = await UserModel.create({
    user_id: users_id,
    name: name,
    age: age,
    gender: gender,
    phone_number: phone_number,
    createdAt: createdAt,
    updatedAt: createdAt
  });

  return { addUsers, addUser }
};

module.exports = {
  getUsersByEmail,
  addUsers,
};
