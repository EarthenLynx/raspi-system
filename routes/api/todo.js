// Import needed modules
const express = require("express");

// Setup the router
var router = express.Router();

router.get("/", (req, res, next) => {
  console.log("received GET request at TODO Route")
})
router.post("/", (req, res, next) => {
  console.log("received POST request at TODO Route")
})
router.delete("/", (req, res, next) => {
  console.log("received DELETE request at TODO Route")
})
router.put("/", (req, res, next) => {
  console.log("received PUT request at TODO Route")
})

module.exports = router;
