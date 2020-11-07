// Initialize the base modules
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
require('dotenv').config()

const osRoute = require("./routes/api/os.route")

// Initialize the routes and the application
const app = express();

// Initialize the middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/os", osRoute);

// Configure the port. Uses standard node port, alternatively 3000 if not available

// Make the app listen to the standard port
app.listen(process.env.PORT, () => console.log("App listening on port " + parseInt(process.env.PORT)));
