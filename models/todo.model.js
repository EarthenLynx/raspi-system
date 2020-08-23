const path = require("path");

// Initialize the DB adapter
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(path.join(__dirname, "../store/db.json"));
const db = low(adapter);

// In here, create all functionalities related to the DB CRUD operations
// It is very common to use a class to wrap the DB methods. Such construction
// is also useful to build in separate validations.
const writeTodo = (data) => {
  return new Promise((resolve, reject) => {
    db.defaults({ todos: [{}] }).write();

    // Validate the incoming data based on type and legnth
    if (typeof data !== "object") {
      console.log("Incoming data was not an object");
      reject("Incoming data was not an object");
      return;
    }

    // Check if incoming object has the property that's used
    if (!data.hasOwnProperty('value')) {
      reject("Incoming object is improperly formatted")
      return;
    }

    // Check if the length of the todo is at least 5 characters
    if (data.value.length <= 5) {
      reject("Your todo must be longer than four characters");
      return;
    }

    // If data passes the test, add todo to the database
    db.get("todos").push(data).write();
    resolve("Data successfully written into DB");
  });
};

const readTodos = () => {
  return new Promise((resolve) => {
    const payload = db.get("todos").value();
    resolve(payload);
  });
};
// { title: 'low!' }

const deleteTodo = (todo) => {
  return new Promise((resolve) => {
    db.get("todos").remove({value: todo.value}).write();
    resolve("Todo successfully deleted!");
  });
};

module.exports = { writeTodo, readTodos, deleteTodo };
