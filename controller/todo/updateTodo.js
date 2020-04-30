const Todo = require("../../models/todo");
const logger = require("../../middleware/logger");
const date = new Date();

const updateTodo = (req, res) => { 
  // Create a query that looks for parameter todo_id based on the id sent by the client
    const query = {'todo_id': req.body.data.todo_id}

    Todo.findOneAndUpdate(query, req.body.data, {upsert: true}, (err, doc) => {
        if (err) {
            res.send({
              statusText: "error",
              msg: "Could not modify todo in database",
            });
            logger.log({
              level: 'error', 
              message: date + ": Error during the update of the recipe" + err
            }); 
          }

          if (doc) {
            res.send({
              statusText: "success",
              msg: `Todo '${doc.todo_head}' successfully updated!`,
            });
          }

          if(!doc) {
            res.send({
                status: 404, 
                statusText: "not found", 
                msg: `You tried to update a todo that doesn't exist. Are you a ghost??`
            });
        }
    });
}

module.exports = updateTodo;