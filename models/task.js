const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
  },
  deadline: Date,
  priority: {
    type: String,
    required: true,
    default: "low",
    enum: ["low", "medium", "high"],
  },
  status: {
    type: String,
    required: true,
    default: "incomplete",
    enum: ["complete", "incomplete"],
  },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
