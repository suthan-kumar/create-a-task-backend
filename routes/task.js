const Router = require("express").Router();
const TaskController = require("../controllers/task");

Router.route("/").get(TaskController.getTasks);

Router.route("/:id").get(TaskController.findTaskById);

Router.route("/").post(TaskController.createTask);

Router.route("/:id").put(TaskController.updateTask);

Router.route("/:id").delete(TaskController.deleteTask);

module.exports = Router;
