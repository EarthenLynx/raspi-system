// Initialize the base modules
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')

// Initialize the routes and the application
const routerTodo = require("./routes/api/todo");
const app = express();

// Initialize the middleware
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, "public")));

// Configure View Engine
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configure the routes
app.use("/todo", routerTodo);

// Configure the route rendering
app.get('/', (req, res) => {
  res.render('home');
});

// Configure the port. Uses standard node port, alternatively 3000 if not available
app.set("port", process.env.PORT || 3000);

// Make the app listen to the standard port
app.listen(app.get("port"), () =>
  console.log("App listening on port " + app.get("port"))
);
