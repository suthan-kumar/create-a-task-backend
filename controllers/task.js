const createHttpError = require("http-errors");
const Task = require("../models/task");

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      return next(createHttpError(404, "Tasks not found."));
    }
    res.status(200).send(tasks);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.findTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return next(createHttpError(404, "Task not found."));
    }
    res.status(200).send(task);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const data = req.body;
    const task = await new Task(data).save();
    if (!task) {
      return next(createHttpError(404, "Task not found."));
    }
    res.status(201).send(task);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const task = await Task.findByIdAndUpdate(id, data, { new: true });
    if (!task) {
      return next(createHttpError(404, "Task not found."));
    }
    res.status(200).send(task);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    next(createHttpError(400, error));
  }
};
