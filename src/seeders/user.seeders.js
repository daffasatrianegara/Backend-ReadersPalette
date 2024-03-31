const { UserModel, AdminModel } = require("../models");
const dateFormat = require("../utils/timezone");

const Admin = [];
const User = [];

const seedDataAdmin = (id, name, gender, phone_number) => {
  const seed = {
    admin_id: id,
    name,
    gender,
    phone_number,
    createdAt: dateFormat(),
    updatedAt: dateFormat(),
  };
  Admin.push(seed);
};

const seedDataUser = (id, name, age, gender, phone_number) => {
  const seed = {
    user_id: id,
    name: name,
    age: age,
    gender: gender,
    phone_number: phone_number,
    createdAt: dateFormat(),
    updatedAt: dateFormat,
  };
  User.push(seed);
};

seedDataAdmin(1, "admin baskara", "pria", "081245333211");
seedDataUser(2, "daffa", 21, "pria", "081243222100");
seedDataUser(3, "firzandi", 20, "pria", "081243222154");
seedDataUser(4, "dian", 19, "wanita", "081243222143");

const createUser = async () => {
  try {
    await AdminModel.bulkCreate(Admin);
    await UserModel.bulkCreate(User);
    const response = {
      status: "berhasil",
      message: "berhasil membuat data user...",
    };
    return response;
  } catch (err) {
    throw new Error("gagal membuat data user, message :", err.message);
  }
};

module.exports = createUser;
