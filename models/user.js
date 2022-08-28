const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    maxlength: 32,
  },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(5).max(32).required(),
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
