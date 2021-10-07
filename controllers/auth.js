const createHttpError = require("http-errors");
const User = require("../models/user");

exports.register = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await User(data).save();
    if (!user) {
      return next(createHttpError(422));
    }
    res.status(201).send(user);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return next(createHttpError(422));
    }
    res.status(200).send(user);
  } catch (error) {
    next(createHttpError(400, error));
  }
};
