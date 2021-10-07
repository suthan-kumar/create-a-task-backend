const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    minlength: 3,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    select: false,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
