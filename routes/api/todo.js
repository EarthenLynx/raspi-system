// Import needed modules
const express = require("express");
const mongoose = require("mongoose");

// Import database config
const db_url = require("../../config/db")

// Import needed controllers
const getTodo = require("../../controller/todo/getTodo");
const saveTodo = require("../../controller/todo/saveTodo");
const deleteTodo = require("../../controller/todo/deleteTodo"); 
const updateTodo = require("../../controller/todo/updateTodo");

// Setup the router
var router = express.Router();

// Setup the database connection
mongoose.connect(db_url, { useNewUrlParser: true });

// Get the list of recipes when calling the api with a get request.
router.get("/", function (req, res, next) {
  getTodo(res); 
});

// When receiving the post request, save the file in the temp folder
// router.post("/upload", (req, res, next) => {
//   uploadFile(req, res, next); 
// });

// Post a new recipe when receiving a post - request
router.post("/", function (req, res, next) {
  saveTodo(req, res);
});

// Delete a recipe, given by its mongodb ID
router.post("/delete", function(req, res, next) {
  deleteTodo(req, res); 
}); 

// Update a recipe, given by its mongodb ID
router.post("/update", function(req, res, next) {
  updateTodo(req, res); 
})

module.exports = router;
