const Todo = require("../../models/todo");
const logger = require("../../middleware/logger");
const randomString = require("crypto-random-string");

const date = new Date();

const saveTodo = (req, res) => {
  // Create a unique ID for the schedule
  const todoId = randomString({ length: 40, type: "url-safe" });

  //   Save the scheduled recipe
  let todo = new Todo({
    todo_id: todoId,
    todo_head: req.body.todo_head, 
    todo_desc: req.body.todo_desc, 
    todo_tags: req.body.todo_tags, 
    todo_done: false, 
    todo_visible: true
  });

  todo.save((err) => {
    if (err) {
      res.send({
        statusText: "error",
        msg: "Could not save todo in database.",
      });

      logger.log({
        level: "error",
        message: date + ": Error while saving the schedule: ".concat(err),
      });
    }
    if (!err) {
      res.send({
        statusText: "success",
        msg: 'Todo successfully created!',
      });
    }
  });
};

module.exports = saveTodo;
