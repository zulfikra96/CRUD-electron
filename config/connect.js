const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('crud.sqlite3')


db.serialize(function(){  
    db.get("SELECT * FROM users", function(err,row){
        console.log(row)
    })
})


