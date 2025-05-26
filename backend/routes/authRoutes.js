const express = require("express");
const protect = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authcontrollers");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/getUser", protect, getUserInfo);

module.exports = router;
//Controllers are JavaScript functions that handle the logic of your application's routes.

