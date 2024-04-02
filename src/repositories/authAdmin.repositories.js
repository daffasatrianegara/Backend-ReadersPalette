const { UsersModel, AdminModel } = require("../models");
const dateFormat = require("../utils/timezone");

const getAdminByEmail = async (email) => {
  return UsersModel.findOne({
    where: { email: email, role: "admin" },
  });
};

const addAdmin = async (params) => {
  const { email, password } = params;
  const { name, gender, phone_number } = params;
  const createdAt = dateFormat();
  const createUsers = await UsersModel.create({
    email: email,
    password: password,
    role: "admin",
    createdAt: createdAt,
    updatedAt: createdAt,
  });

  const id = await createUsers.id;
  const createAdmin = await AdminModel.create({
    admin_id: id,
    name: name,
    gender: gender,
    phone_number: phone_number,
    createdAt: createdAt,
    updatedAt: createdAt,
  });

  return { createUsers, createAdmin };
};

module.exports = {
    getAdminByEmail,
    addAdmin
}