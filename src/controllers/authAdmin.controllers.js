const { authAdminServices } = require("../services");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const auth = await authAdminServices.authAdmin(email, password);
    res.status(200).json({
      status: "berhasil",
      message: "login admin berhasil...",
      token: auth,
    });
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "email atau password kosong...",
      });
      return;
    } else if (err.message == 401) {
      res.status(401).json({
        status: "failed",
        message: "email atau password tidak ditemukan...",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    }
  }
};

const registerAdmin = async (req, res) => {
    const { email, password } = req.body
    const { name, gender, phone_number } = req.body
  try {
    await authAdminServices.createAdmin({
        email : email,
        password : password,
        name : name,
        gender : gender,
        phone_number : phone_number
    })
    res.status(200).json({  status : 'berhasil' ,message : 'register berhasil...' });
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "beberapa nilai masukan kosong...",
      });
      return;
    } else if (err.message == 401) {
      res.status(401).json({
        status: "failed",
        message: "email sudah terdaftar...",
      });
      return;
    } else {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    }
  }
};

module.exports = {
    login,
    registerAdmin
}