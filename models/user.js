const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
