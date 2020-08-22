const {writeTodo} = require("../models/todo.model");

const create_todo = (req, res, next) => {
  const todo = req.body.value;
  writeTodo(todo)
  .then(msg => res.status(200).send(msg))
  .catch(err => res.status(500).send(err))
}

module.exports = create_todo