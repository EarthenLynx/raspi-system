const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const TodoSchema = new Schema({
    todo_id: {type: String, required: true},
    todo_head: {type: String, required: true}, 
    todo_desc: {type: String, required: true, max: 400}, 
    todo_tags: {type: Array, required: true},
    todo_done: {type: Boolean, required: true},
    todo_visible: {type: Boolean, required: true}, 
}); 

// Export the model 
module.exports = mongoose.model("Todo", TodoSchema); 