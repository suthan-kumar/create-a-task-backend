const createHttpError = require("http-errors");

exports.authFilter = async (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return next(createHttpError(401));
    }
    const userId = authorization.split(" ").pop();
    if (!userId) {
      return next(createHttpError(401));
    }
    req.userId = userId;
    next();
  } catch (error) {
    next(error);
  }
};
