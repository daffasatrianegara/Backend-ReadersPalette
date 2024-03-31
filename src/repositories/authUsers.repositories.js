const { UsersModel, UserModel } = require("../models");
const dateFormat = require('../utils/timezone')

const getUsersByEmail = async (email) => {
  return UsersModel.findOne({
    where: {
      email: email,
      role: 'user'
    },
  });
};

const addUsers = async (params) => {
  const { email, password } = params;
  const { name, age, gender, phone_number } = params;
  const createdAt = await dateFormat()

  const addUsers = await UsersModel.create({
    email: email,
    password: password,
    createdAt: createdAt,
    updatedAt: createdAt
  });

  const users_id = await addUsers.id

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
