const mongoose = require("mongoose");
const { DB_URL } = require("../constants/config");

exports.initDB = (callback) => {
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Mongoose Connected.");
      callback();
    })
    .catch((error) => {
      console.log(error);
      process.exit(0);
    });
};
