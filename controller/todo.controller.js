const { writeTodo, readTodos, deleteTodo } = require("../models/todo.model");

const create_todo = (req, res, next) => {
  const todo = req.body;
  writeTodo(todo)
    .then((msg) => res.status(200).send({status: 200, msg}))
    .catch((err) => res.status(500).send({status: 500, err}));
};

const get_todos = (req, res, next) => {
  readTodos()
    .then((data) => res.status(200).send({status: 200, msg: "Todos successfully fetched", data}))
    .catch((err) => res.status(500).send({status: 200, msg: err}));
};

const delete_todo = (req, res, next) => {
  const todo = req.body;
  deleteTodo(todo).then(msg => res.status(200).send({status: 200, msg}));
}

module.exports = {create_todo, get_todos, delete_todo};
