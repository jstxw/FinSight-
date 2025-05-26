const express = require("express");
const {protect} = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authcontrollers");

const upload = require("../middleware/uploadMiddleware")

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req,res) => {
  if (!req.file){
    return res.status(400).json({ message: "No file uploaded"});
  }
  const imageURL = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({imageURL});
})

module.exports = router;
//Controllers are JavaScript functions that handle the logic of your application's routes.

