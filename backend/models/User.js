const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //library for hashing passwords

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImageURL: { type: String, default: null },
}, { timestamps: true }); //allows time based information

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); //hashes with salt round of 10 
  next();
});

// Compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) { //compare passwords of hashed and candidate entered
  return await bcrypt.compare(candidatePassword, this.password);
}

module.exports = mongoose.model("User", UserSchema); //exports this to user in authcontrollers 
