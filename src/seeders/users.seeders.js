const { UsersModel } = require("../models");
const dateFormat = require("../utils/timezone");
const { hashSync } = require('bcrypt')

const Users = [];

const seedData = (email, password, role) => {
  const hashPass = hashSync(password, 10)
  const seed = {
    email: email,
    password: hashPass,
    role: role,
    createdAt: dateFormat(),
    updatedAt: dateFormat(),
  };
  Users.push(seed);
};

seedData("admin@gmail.com", "admin123", "admin");
seedData('daffa@gmail.com', '123', 'user')
seedData('firzandi@gmail.com', '123', 'user')
seedData('dian@gmail.com', '12345', 'user')

const createUsers = async () => {
    try {
        await UsersModel.bulkCreate(Users)
        const response = { status : 'berhasil', message: 'berhasil membuat data users...' }
        return response
    } catch(err) {
        throw new Error('gagal membuat data users, message :', err.message)
    }
}

module.exports = createUsers
