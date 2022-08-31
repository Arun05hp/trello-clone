const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: { type: String, minlength: 2, maxlength: 50 },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
});

userSchema.methods.verifyPassword = async function (password, hashPassword) {
  return await bcrypt.compare(password, hashPassword);
};

userSchema.methods.hashPassword = async function (round, password) {
  const salt = await bcrypt.genSalt(round);
  return await bcrypt.hash(password, salt);
};

function validateUser(user) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(5).max(42).required(),
  });
  return schema.validate(user);
}

module.exports.User =
  mongoose.models.User || mongoose.model("User", userSchema);
module.exports.validate = validateUser;
