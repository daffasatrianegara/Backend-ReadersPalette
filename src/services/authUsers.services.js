const { AuthRepo } = require("../repositories");
const { compareSync, hashSync } = require("bcrypt");

const loginUsers = async (email, password) => {
  if (!email && !password) {
    throw new Error(400);
  }

  const checkEmail = await AuthRepo.getUsersByEmail(email);
  if (!checkEmail) {
    throw new Error(401);
  }

  const checkPass = await compareSync(password, checkEmail.dataValues.password);
  if (!checkPass) {
    throw new Error(401);
  }

  const response = checkEmail.dataValues.id ;
  return response;
};

const registerUsers = async (data) => {
  const { email, password } = data;
  const { name, age, gender, phone_number } = data;
  if ((!email && !password) || (!name && !age && !gender && !phone_number)) {
    throw new Error(400);
  }

  const checkEmail = await AuthRepo.getUsersByEmail(email);
  if (checkEmail) {
    throw new Error(401);
  }

  const hashPass = hashSync(password, 10);
  const add = await AuthRepo.addUsers({
    email: email,
    password: hashPass,
    name: name,
    age: age,
    gender: gender,
    phone_number: phone_number,
  });

  if (!add) {
    throw new Error(500);
  }

  return add
};

module.exports = {
  loginUsers,
  registerUsers,
};
