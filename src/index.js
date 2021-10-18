const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
})

connection.connect( (err) =>{
    if(err) throw err
    console.log('The connection was established')
})

connection.query('SELECT * from your database', (err, rows) =>{
    if(err) throw err
    console.log('The data in the table are as follows:')
    console.log(rows)
    console.log("The number of results is:")
    console.log(rows.length)
})
