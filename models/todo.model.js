const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");

const adapter = new FileSync(path.join(__dirname, "../store/db.json"));
const db = low(adapter);

// In here, create all functionalities related to the DB CRUD operations
const writeTodo = (data) => {
  return new Promise((resolve, reject) => {
    db.defaults({ todos: [] }).write();
    console.log(data);
    console.log(typeof data);

    // Validate the incoming data based on type and legnth
    if (typeof data !== "string") {
      reject("Incoming data was not a string");
      return;
    }
    if (data.length < 2) {
      reject("Your todo must be longer than that");
      return;
    }

    // If data passes the test, add todo to the database
    db.get("todos").push(data).write();
    resolve("Data successfully written into DB");
  });
  // Set some defaults (required if your JSON file is empty)
};

module.exports = { writeTodo };
