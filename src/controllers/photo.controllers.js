const { photoServices } = require("../services");

const uploadPhotoUser = async (req, res) => {
  const id = req.params.id;
  const fileDirr = req.file.path;
  const fileName = req.file.filename;
  try {
    const upload = await photoServices.uploadPhotoUsers(id, {
      photo_profile: fileName,
    });
    res.status(200).json({
      status: "berhasil",
      message: "berhasil mengupload foto pengguna",
      data: upload,
    });
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "nilai id atau foto kosong...",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    }
  }
};

const uploadPhotoBooks = async (req, res) => {
  const id = req.params.id;
  const fileDirr = req.file.path;
  const fileName = req.file.filename;
  try {
    await photoServices.uploadPhotoBook(id, { photo : fileName })
    res.status(200).json({
        status : 'berhasil',
        message : 'berhasil mengupload data foto buku...',
    })
  } catch (err) {
    if (err.message == 400) {
      res.status(400).json({
        status: "failed",
        message: "nilai id atau foto kosong...",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: err.message,
      });
    }
  }
};

module.exports = {
    uploadPhotoUser,
    uploadPhotoBooks
}
