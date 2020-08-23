# The model part

## In a nutshell
> - Models describe data
> - They offer methods to CRUD databases
> - They usually contain validators to check for data integrity

## Description
Models are used to describe data. In Node applications, models usually provide functionality to describe and manipulate data structures. Creating models is carried out by backend (server) developers.

When interacting with a SQL db's, the data structure is usually provided by the database itself
When interacting with NoSQL db's, it is common practice to use a JSON schema that describes the data.

In either case it is useful to add, next to the CRUD operations, a data validator. 

The most common practice is to use a schema validator, like the jsonschema package or a custom written one. Javascript extensions like Typescript also offer the usage of built-in interfaces.

## OData, Swagger & Graphql specifications

| Specification | License / ISO        | Owner                  | Developed by                      | Type              |
| ------------- | -------------------- | ---------------------- | --------------------------------- | ----------------- |
| OData         | ISO/IEC 20802-1:2016 | Microsoft              | Microsoft                         | HTTP Protocol     |
| OpenAPI       | Apache License       | The Linux foundation   | Open API TSC. Github Contributors | API Specification |
| Graphql       | None                 | The Graphql foundation | Facebook                          | Query Language    |

Even though their specifications differ by their nature, the goal these three specs try to fulfill is similar, namely describing and verifying data. None of the three above are coupled to Javascript and can be used with any type of web app implementation.

### OData
- OData models differ from common JSON models by their enriched schemas. 
- An OData schema usually contains several entities that are related to one another by their metadata. 
- Also, OData models are stateless, meaning all that's needed to describe the data is available within the model and thereby completely decoupled from the database. 

### OpenAPI
- OpenAPI also offers enriched schemas, their structure, however, is different from the OData spec. 
- Instead of entities, OpenAPI handles documents
- The specification offers a larger flexibility, at the cost of a larger boilerplate

### GraphQL
- Graphql is written 100% in shell. It targets to solve the issue of executing several queries on several API endpoints
- Instead of schemas, like entities or documents, Graphql offers queries.
- Graphql offers maximum flexibility, allowing access to several resources in a single call.
- It does, however, require a huge architectural boilerplate

### Example

```javascript
// Initialize the DB module(s).
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(path.join(__dirname, "../store/db.json"));
const db = low(adapter);

// Create the model's function to create a new object
const writeTodo = (data) => {
  return new Promise((resolve, reject) => {

    // LOWDB - related: Initialize the database structure
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

    // Pass on the success message to the calling controller
    resolve("Data successfully written into DB");
  });
};

module.exports = {writeTodo}

```

## Links to related packages
[SQLite npm package](https://www.npmjs.com/package/sqlite3)
[MYSQL npm package](https://www.npmjs.com/package/mysql)
[jsonschema npm package](https://www.npmjs.com/package/jsonschema)
[openapi npm package](https://www.npmjs.com/package/@openapitools/openapi-generator-cli)
[graphql npm package](https://www.npmjs.com/package/graphql)