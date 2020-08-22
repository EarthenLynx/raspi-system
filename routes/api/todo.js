// Import needed modules
const express = require("express");
const {create_todo, get_todos, delete_todo} = require("../../controller/todo.controller");

// Setup the router
var router = express.Router();

router.get("/", (req, res, next) => {
  get_todos(req, res, next);
})
router.post("/", (req, res, next) => {
  create_todo(req, res, next);
})
router.delete("/", (req, res, next) => {
  delete_todo(req, res, next);
})
router.put("/", (req, res, next) => {
  console.log("received PUT request at TODO Route")
})

module.exports = router;
