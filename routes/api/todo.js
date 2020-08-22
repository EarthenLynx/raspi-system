// Import needed modules
const express = require("express");
const create_todo = require("../../controller/todo.controller");

// Setup the router
var router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Received GET requests at TODO Route")
})
router.post("/", (req, res, next) => {
  create_todo(req, res, next);
})
router.delete("/", (req, res, next) => {
  console.log("received DELETE request at TODO Route")
})
router.put("/", (req, res, next) => {
  console.log("received PUT request at TODO Route")
})

module.exports = router;
