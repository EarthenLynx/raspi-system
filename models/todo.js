const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('../store/db.json')
const db = low(adapter)

// In here, create all functionalities related to the DB CRUD operations


module.exports = {}