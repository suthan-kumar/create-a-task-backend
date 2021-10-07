const Router = require("express").Router();
const AuthController = require("../controllers/auth");

Router.route("/login").post(AuthController.login);

Router.route("/register").post(AuthController.register);

module.exports = Router;
