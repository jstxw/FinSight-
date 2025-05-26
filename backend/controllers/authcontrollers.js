
// User → POST /api/register → authRoutes.js → registerUser() in authcontrollers.js
//                     ↓
//                MongoDB + JWT


const User = require("../models/User")
const jwt = require("jsonwebtoken");


// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User
exports.registerUser = async (req, res) => {
     console.log("📥 req.body received:", req.body);
    const {fullName, email, password, profileImageUrl} = req.body; // fullName is not defined

    //checking for missing fields 
    if ( !fullName || !email || !password ) {
        return res.status(400).json({message: "All fields are required"});
    }
    // Check if email already exists 
    try{
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json ({message: "Email already in user"}); 
        }
        // Create the user
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl,
        });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id),
        });
    }
    catch (err) {
        res
            .status(500)
            .json({ message: "Error registering user", error: err.message });
        };
    };

// Login User
exports.loginUser = async (req, res) => {};

// Register User
exports.getUserInfo = async (req, res) => {};
