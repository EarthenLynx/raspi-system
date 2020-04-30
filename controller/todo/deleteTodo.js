const Todo = require("../../models/todo");
const logger = require("../../middleware/logger");
const date = new Date();

// Find the schedule by the given ID and delete it from the database.
const deleteTodo = (req, res) => {
  Todo.findByIdAndDelete(req.body.todo_id, (err, data) => {
    if (err) {
      res.send({
        statusText: "error",
        msg: "Could not delete schedule in database",
      });
      logger.log({
        level: "error",
        message: date + ": Error during the deletion of the schedule" + err
      });
    }

    if (data) {
      res.send({
        statusText: "success",
        msg: `Todo '${data.todo_head}' successfully removed!`,
      });
    }

    if (!data) {
      res.send({
        statusText: "not found",
        msg: "Todo was not found in db.",
      });
      logger.log({
        level: "error",
        message: date + ": User tried to delete a schedule that did not exist"
      });
    }
  });
};

module.exports = deleteTodo;
