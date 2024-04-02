const { authServices } = require("../services");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const auth = await authServices.loginUsers(email, password);
    res.status(200).json({ message: "login berhasil...", status: true, id : auth });
  } catch (err) {
    if(err.message == 400) {
        res.status(400).json({
            status : 'failed',
            message : 'email atau password kosong...'
        })
        return
    } else if(err.message == 401) {
        res.status(401).json({
            status : 'failed',
            message : 'email atau password tidak ditemukan...'
        })
    } else {
        res.status(500).json({
            status : 'failed',
            message : err.message
        })
    }
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;
  const { name, age, gender, phone_number } = req.body;
  try {
    await authServices.registerUsers({
      email: email,
      password: password,
      name: name,
      age: age,
      gender: gender,
      phone_number: phone_number,
    });
    res.status(200).json({  status : 'berhasil' ,message : 'register berhasil...' });
  } catch (err) {
    if(err.message == 400) {
        res.status(400).json({
            status : 'failed',
            message : 'beberapa nilai masukan kosong...'
        })
        return
    } else if(err.message == 401) {
        res.status(401).json({
            status : 'failed',
            message : 'email sudah terdaftar...'
        })
        return
    } else {
        res.status(500).json({
            status : 'failed',
            message : err.message
        })
    }
  }
};

module.exports = {
  login,
  register,
};
