const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('crud.sqlite3')

exports.db = db




