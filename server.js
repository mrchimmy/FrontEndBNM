const express = require('express');
const sql = require('mysql');
const app = express();
const conn = sql.createConnection({
    host : "localhost",
    user : "chim",
    password : "",
    database : "mrchimky"
})




app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(3000)