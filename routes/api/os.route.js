// Import needed modules
const express = require("express");
const {getOsInfo} = require("../../controller/os.controller")

// Setup the router
var router = express.Router();

router.get("/", (req, res, next) => getOsInfo(req, res)) /* TODO: Get a list of processes running */

module.exports = router;
