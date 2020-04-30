const Todo = require("../../models/todo");
const logger = require("../../middleware/logger");

const date = new Date();

// Query the database and return all todos found
const getTodo = (res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      res.send({
        statusText: "error",
        msg: "An error occured while fetching the schedules",
      });

      logger.log({
        level: "error",
        message: date + ": Error while fetching todos: " + err,
      });
    }

    if (!err) {
      res.send({
        statusText: "success",
        msg: `${todos.length} todos were found in database`,
        // Upon successful query, return the data fetched from database
        data: todos,
      });
    }
  });
};

module.exports = getTodo; 