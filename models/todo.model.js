const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");

const adapter = new FileSync(path.join(__dirname, "../store/db.json"));
const db = low(adapter);

// In here, create all functionalities related to the DB CRUD operations
const writeTodo = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    db.defaults({ todos: [{}] }).write();

    // Validate the incoming data based on type and legnth
    if (typeof data !== "object") {
      reject("Incoming data was not a valid object");
      return;
    }
    if (data.value.length < 2) {
      reject("Your todo must be longer than that");
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
    console.log(payload);
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
