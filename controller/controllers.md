# The controller part

## In a nutshell
> - Controllers execute actions
> - Controllers call upon model's functionality
> - Controllers pick up requests from views and send responses back to it

## Description
Controllers are used to execute functions. In Node applications, controller variables are based on an input by the user of the app's view. This input is then used to call a model's method and mutate database entries. Creating controllers is usually carried out by frontend developers

The way this is handled in Node apps usually works like this: 

1. A route is hit by an HTTP request
2. The request is directed to the route's controller(s)
3. The controller processes the request's content, e.g. the body / url query / params
4. It calls model methods to change database entries
5. In most cases, the controller then sends back a payload to the view.
6. This payload's message is rendered on the view, telling the user whether his intended result has been achieved or not
7. The view is then re-rendered based on the payload's content.  

## Example 

```javascript
// Import the model's method
const { writeTodo } = require("../models/todo.model");

// Function to create a todo
const create_todo = (req, res, next) => {
  // Extract the todo-object from the request's body
  const todo = req.body;

  // Pass on the todo to the appropriate method
  writeTodo(todo)

    // Notify the user on the query's result
    .then((msg) => res.status(200).send({status: 200, msg}))
    .catch((err) => res.status(500).send({status: 500, msg: err}));
};

module.exports = {create_todo}
```